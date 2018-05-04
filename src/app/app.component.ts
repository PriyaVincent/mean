import { Component } from '@angular/core';
import { StudentserviceService } from './studentservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';
  public students: Array<any> = [];

  constructor(private studentserviceService: StudentserviceService){
    this.studentserviceService.getStudents().subscribe(response =>   {
      for (let i = 0; i < response.length; i++) {
      this.students.push(response[i]);
    }
    console.log('length: '+this.students.length);
 });
    
    
  }
  
}
