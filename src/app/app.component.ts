import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent implements OnDestroy{
  title = 'Pasaré Web II?';
  description = 'ya tengo definido mi proyecto final'
  ngOnDestroy(): void {}
}
/*
var brand: string = 'chevrolet';
var message = "hoy es un buen día tengo un auto ${brand}";

const age: number = 8;
const height: number = 1.78;

const aprovados: boolean = true;

const brands: string[] = ['chevrolet', 'ford', 'general motors'];
const ages: number[] = [8,5,12,3,1];

//type permite crear tipos de datos de ser necesario
type Animal = 'Cheatah' | 'Lion';

enum brands { 'chevrolet', 'ford', 'general_motors' };
const mycar: brands.general_motors;
 */