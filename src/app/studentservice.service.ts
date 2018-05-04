import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentserviceService {

  results;

  constructor(private http: Http) { }

  getStudents(){
    return this.http.get('/students').map(result => this.results = result.json().data);
  }

}
