import { Component, OnInit } from '@angular/core';
import { trigger, transition, group, query, style, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('1 => 2, 1=>3, 1=>4, 2 => 3, 2=>4, 3 =>4', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 30, left: 0, right: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.3s ease-in-out', style({ transform: 'translateX(-100%)' })),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.3s ease-in-out', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
      transition('4 => 3, 4 => 2, 4 => 1, 3 => 2, 3 =>1, 2 => 1', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 30 , left: 0, right: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.3s ease-in-out', style({ transform: 'translateX(100%)' })),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.3s ease-in-out', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
    ])
  ]
})
export class AppComponent {
  title = 'app';
  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }

  onActivate(event) {
    window.scroll(0,0);
    console.log(event)
  }

}
