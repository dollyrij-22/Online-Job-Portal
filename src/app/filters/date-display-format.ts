import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'dateDisplayFormat'
})
export class DateDisplayFormat implements PipeTransform {

    transform(datevalue: any, args?: any): any {
        // return moment(datevalue, 'YYYY-MM-DD').format('DD MMM YYYY');
    }
}
