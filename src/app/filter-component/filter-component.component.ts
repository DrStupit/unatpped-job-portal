import { Component, OnInit } from '@angular/core';
import { Categories } from '../Models/categories';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.scss']
})
export class FilterComponentComponent implements OnInit {
  categories: Categories[] = [
    {id: 1, name: 'Art'},
    {id: 2, name: 'Design'},
    {id: 3, name: 'Fashion'},
    {id: 4, name: 'Film'},
    {id: 5, name: 'Music'},
    {id: 6, name: 'Photography'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
