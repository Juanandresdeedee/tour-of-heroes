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

 

constructor() { }

  ngOnInit() {
  }

}
