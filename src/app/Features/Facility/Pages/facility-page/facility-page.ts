import { Component } from '@angular/core';
import { FacilitySideBar } from "../../Components/facility-side-bar/facility-side-bar";
import { RouterOutlet } from '@angular/router';
 
@Component({
  selector: 'app-facility-page',
  imports: [FacilitySideBar, RouterOutlet],
  templateUrl: './facility-page.html',
  styleUrl: './facility-page.css',
})
export class FacilityPage {}
