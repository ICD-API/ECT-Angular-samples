import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

// import the angular component that uses the ECT
import { ECTAngularComponent } from './ect-angular/ect-angular.component';

@Component({
  selector: 'app-root',
  templateUrl: 'main.html',
  standalone: true,
  imports: [ECTAngularComponent],
})
export class App {}

bootstrapApplication(App);
