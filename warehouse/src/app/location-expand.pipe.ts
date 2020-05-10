import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationExpand'
})
export class LocationExpandPipe implements PipeTransform {

  transform(locationID: string): string {
    let returnString: string;
    let stringArray = locationID?.split("");
    if (stringArray) {
      returnString = "Aisle " + stringArray[0] + stringArray[1] + ", Bay " +
        stringArray[2] + ", Shelf " + stringArray[3] + ", Bin " +
        stringArray[4];
    }
    return returnString;
  }

}
