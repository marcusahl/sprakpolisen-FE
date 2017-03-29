//Angular
import { Component, OnInit }       from '@angular/core';
import { ActivatedRoute, Params }  from '@angular/router';
import { Location }                from '@angular/common';

//Customs
import { SpellService }            from './spell.service';

//RXJS
import { Subject }                 from 'rxjs/Subject';
import { Observable }              from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';





@Component({
  selector: 'my-spelling',
  templateUrl: './spelling.component.html',
})

export class SpellingComponent implements OnInit {
  word: String;
  spellState: Observable<boolean>;
  private searchTerms = new Subject<string>();


  constructor(
    private spellService: SpellService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  // push new search term on the event stram in the observable
  checkSpelling(term: string): void {
    this.searchTerms.next(term);
    // console.log(`added ${term} to the Subject`)
  }

  ngOnInit(): void {

    // this.route.params
    //   .map((params: Params) => params['word'])
    //   .map((maybeWord: string) => (maybeWord) ? maybeWord : "")
    //   .subscribe((justWord: string) => this.searchTerms.next(justWord));

    this.spellState = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => (term)
          ? this.spellService.checkEvenLength(term)
          : Observable.of<boolean>(null))
      .catch(error => {
        console.log(error);
        console.log("There was an error!!");
        return Observable.of<boolean>(null);
      })

    }
}
