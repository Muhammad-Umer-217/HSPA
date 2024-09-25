
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { Iproperty } from 'src/app/Iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties:Array<Iproperty>;

  constructor(private housingservice:HousingService ) { }

  ngOnInit(): void {
   this.housingservice.getAllProperties().subscribe(
    data=>{
     this.Properties=data;
     
    });  
    
    
  }

}

