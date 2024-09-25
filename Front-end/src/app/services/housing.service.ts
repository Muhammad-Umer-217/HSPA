import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproperty } from '../Iproperty.interface';
import {map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }

getAllProperties() {
  return this.http.get('data/properties.json').pipe(map(data => {
    const PropertiesArray: Array<Iproperty> = [];
    for (const id in data) {
      if (data.hasOwnProperty(id)) {
        PropertiesArray.push(data[id]);
      }
    }
    return PropertiesArray;
  }));
}




}

