import { Country } from "./country.interface";
import { Region } from "./region.type";

export interface cacheStore{
    byCapital: itemCountries;
    byCountry: itemCountries;
    byRegion: regionCountries;
}

export interface itemCountries{
    item: string;
    countries: Country[]
}

export interface regionCountries{
    region: Region;
    countries: Country[];
}