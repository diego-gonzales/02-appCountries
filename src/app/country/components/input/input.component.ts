import { Component, ViewChild, ElementRef, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit {

  // Variables
  @ViewChild('inputSearch') myInput: ElementRef<HTMLInputElement>;

  @Input() placeholderValue: string = '';
  @Output() emitInputValue = new EventEmitter<string>();
  @Output() emitInputValueDebounce = new EventEmitter<string>();

  debounceSubject = new Subject<string>();


  // onInit
  ngOnInit() {
    this.debounceSubject
    .pipe(
      debounceTime(300)
    )
    .subscribe( valor => {
      this.emitInputValueDebounce.emit(valor);
    })
  }


  // Methods
  sendValue(evento) {
    evento.preventDefault();
    const inputValue = this.myInput.nativeElement.value;

    this.emitInputValue.emit(inputValue);
  }


  keyPressed() {
    this.debounceSubject.next(this.myInput.nativeElement.value);
  }

}
