import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  public isLoading: boolean = false;



  constructor ( private countriesservice: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesservice.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesservice.cacheStore.byRegion.region;
  }

  searchByRegion ( region: Region): void{
    this.isLoading = true;
    this.selectedRegion = region;
    this.countriesservice.searchRegion( region )
    .subscribe( countries => {
      this.countries = countries
      this.isLoading = false;
    });
  }
}
