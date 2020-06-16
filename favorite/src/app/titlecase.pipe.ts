import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  private capitalise(text: string): string {
    return text.substring(0,1).toUpperCase().concat(text.substring(1));
  }

  transform(value: string): string {
    let words: string[];
    
    words = value.toLowerCase().split(' ');
    
    let result: string = this.capitalise(words[0]);
    words.shift();
    for (let word of words){
      //result.push(this.capitalise(word));
      if (word != "of" && word != "the"){
        result = result + ' ' + this.capitalise(word);
      } else {
        result = result + ' ' + word;
      }
    }
    return result;
  }

}
