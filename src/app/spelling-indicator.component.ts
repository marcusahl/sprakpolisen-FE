import { Component, Input, OnInit }       from '@angular/core';

//RXJS
import { Observable }              from 'rxjs/Observable';

@Component({
  selector: 'my-spelling-indicator',
  templateUrl: './spelling-indicator.component.html'
})

export class SpellingIndicatorComponent implements OnInit{
  private indicatorNull = '❔';
  private indicatorGood = '✅';
  private indicatorBad = '❌'
  indicator = this.indicatorNull;

  @Input() spellingStateObservable: Observable<boolean>;

  ngOnInit(): void {
    this.spellingStateObservable
      .subscribe(bool => {
          if(bool === true) {
            this.indicator = this.indicatorGood
          } else if (bool === false) {
            this.indicator = this.indicatorBad
          } else {
            this.indicator = this.indicatorNull;
          }
      })
  }


}
