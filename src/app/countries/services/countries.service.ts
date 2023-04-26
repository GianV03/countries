import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { Observable, catchError, delay, map, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl='https://restcountries.com/v3.1';
    constructor(
        private httpClient: HttpClient
    ) { }

    searchCountryByAlphaCode(code: string): Observable<Country | null>{

        return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
               .pipe(
                delay(900),
                map(countries=> countries.length>0? countries[0]: null),
                catchError(()=>of(null))
               );
    }
    
    searchCapital(query:string): Observable<Country[]>{
        return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${query}`)
        .pipe(
            catchError(error=> of([]))
        );
    }

    searchByCountry(query:string): Observable<Country[]>{
        return this.httpClient.get<Country[]>(`${this.apiUrl}/name/${query}`)
        .pipe(
            catchError(error=> of([]))
        )
    }

    searchByRegion(query:string): Observable<Country[]>{
        return this.httpClient.get<Country[]>(`${this.apiUrl}/region/${query}`)
        .pipe(
            catchError(error=>of([]))
        )
    }
}