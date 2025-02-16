import { StarComponent } from './../star/star.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  titleAbout:string = 'About Component';
  colorAbout:string = 'white';
}
