import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-main-animation',
  templateUrl: './main-animation.component.html',
  styleUrls: ['./main-animation.component.scss']
})
export class MainAnimationComponent implements OnInit {

  options: AnimationOptions = {
    path: '../../../../assets/animations/94296.json',
  }

  animationState: string = "";
  iconState: string = "display: none";
  iconClass: string = "";

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.animationState = "display: none";
      this.iconState = "display: block";
      this.iconClass = "animate__animated animate__fadeIn";
    }, 1500);
  }

}
