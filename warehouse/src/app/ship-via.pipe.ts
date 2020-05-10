import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shipVia'
})
export class ShipViaPipe implements PipeTransform {

  transform(code: number): string {
    let returnString: string;
    switch(code) {
      case 1:
        returnString = "Federal Express";
        break;
      case 2:
        returnString = "UPS";
        break;
      case 3:
        returnString = "US Postal Service";
        break;
      default:
        console.error(`Unknown shipping code: ${code}`);
        break;
    }

    return returnString;
  }

}
