import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    // constructor
    constructor(private http: HttpClient) {}

    // function to get data from api_url
    getData() {
        return this.http.get('https://api.myjson.com/bins/kez8a');
    }
}
