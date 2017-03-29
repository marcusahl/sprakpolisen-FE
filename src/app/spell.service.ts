import { Injectable } from '@angular/core';

@Injectable()
export class SpellService {
  checkEvenLength(word: String): Promise<boolean> {
    if (word == undefined) { throw Error("SpellService does not fail gracefully with undefined strings!")};
    return new Promise(resolve => {
        // Simulate server latency with 0.1 second delay
        setTimeout(() => resolve( (word.length % 2) == 0), 100);
      });
  }
}
