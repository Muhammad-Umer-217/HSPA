import { sharedStylesheetJitUrl } from '@angular/compiler'
import{Component, Input} from '@angular/core'
import { Iproperty } from 'src/app/Iproperty.interface';




@Component({
     selector:'app-property-card',
    // template: '<h1>i am a card</h1>',
    templateUrl: 'property-card.component.html',
    styleUrls: ['property-card.component.css']

     
}
)




export class PropertyCardComponent{

@Input() property:Iproperty



    

}








