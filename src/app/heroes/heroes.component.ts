import { Component, OnInit } from '@angular/core';
import {defineCustomElements} from '@teamhive/lottie-player/loader';
defineCustomElements(window);
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {


  appTitle: string = 'myapp';
  CARTAS  = [1,2,3,4,5]

 

constructor() { }

  ngOnInit() {
    let variable = this.appTitle.length > 0
    console.log(this.appTitle);
    

  }

}
