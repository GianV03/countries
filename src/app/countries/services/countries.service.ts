import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { cacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl='https://restcountries.com/v3.1';

    public cacheStore:cacheStore ={
        byCapital: {item:'', countries: []},
        byCountry: {item:'', countries:[]},
        byRegion: {region:'', countries:[]}
    
    }

    constructor(
        private httpClient: HttpClient
    ) { 
        this.getLocalStorage();
    }
    
    
    getCountriesRequest(query:string){
        return this.httpClient.get<Country[]>(`${this.apiUrl}/${query}`)
        .pipe(
            catchError(error=>of([]))
        )
    }

    getLocalStorage(){
        if(!localStorage.getItem('cacheStore')) return;
        this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
    }

    setLocalStorage(){
        localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore));
    }

    searchByCode(query:String): Observable<Country | null>{
        return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${query}`)
         .pipe(
            map(countries => countries.length>0? countries[0]: null),
             catchError(error=>of(null))
         );
    }
    
    searchCapital(query:string): Observable<Country[]>{
        return this.getCountriesRequest(`capital/${query}`)
        .pipe(
            tap((response:Country[]) =>{this.cacheStore.byCapital = {item:query, countries:response}}),
            tap(()=>this.setLocalStorage())
        )
    }

    searchCountry(query: string): Observable<Country[]>{
        return this.getCountriesRequest(`name/${query}`)
        .pipe(
            tap((response:Country[]) =>{this.cacheStore.byCountry = {item:query, countries:response}}),
            tap(()=>this.setLocalStorage())
        )
    }

    searchRegion(query: Region): Observable<Country[]>{
        return this.getCountriesRequest(`region/${query}`)
        .pipe(
            tap((response:Country[]) =>{this.cacheStore.byRegion = {region:query, countries:response}}),
            tap(()=>this.setLocalStorage())
        )
}

}