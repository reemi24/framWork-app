import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  titlePortfolio: string = 'Portfolio component';
  colorPortfolio:string = '#2c3e50';

  portfolioSrc:string[]=[
    'assets/images/poert1.4417330275f78faa31c3.png',
    'assets/images/port2.6554473016d32b343f02.png',
    'assets/images/port3.494a4a914b5471b41f3e.png',
    'assets/images/poert1.4417330275f78faa31c3.png',
    'assets/images/port2.6554473016d32b343f02.png',
    'assets/images/port3.494a4a914b5471b41f3e.png',
  ]

  flag:boolean = true;

  layerImg:string = '';

  hideLayer(element:EventTarget | null , img:HTMLImageElement):void{
    if(element == img){
      return;
    }else{
      this.flag = true
    }
  }
}
