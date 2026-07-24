import { Component } from '@angular/core';
import { StudentCreate } from '../../components/student-create/student-create';

@Component({
  selector: 'app-student-page',
  imports: [StudentCreate],
  templateUrl: './student-page.html',
  styleUrl: './student-page.css',
})
export class StudentPage {}
