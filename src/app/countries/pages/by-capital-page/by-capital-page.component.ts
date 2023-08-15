import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor ( private countriesservice: CountriesService) {}


  ngOnInit(): void {
    this.countries = this.countriesservice.cacheStore.byCapital.countries;
    this.initialValue = this.countriesservice.cacheStore.byCapital.term;
  }

  searchByCapital ( term: string): void{
    this.isLoading = true;
    this.countriesservice.searchCapital( term )
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }


}
