import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties:Array<any> =[
    {
    "Id":1,
    "type":"House",
    "price": 200000,
    },
{
  "Id":1,
  "type":"House",
  "price": 200000,
},
{
  "Id":1,
  "type":"House",
  "price": 200000,
},
{
  "Id":1,
  "type":"House",
  "price": 200000,
},
{
  "Id":1,
  "type":"House",
  "price": 200000,
},
{
  "Id":1,
  "type":"ali house",
  "price": 10000,
},

]

  constructor() { }

  ngOnInit(): void {
  }

}
