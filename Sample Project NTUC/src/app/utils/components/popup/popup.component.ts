import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() message: string;
  @Input() optionsIncluded: string[];
  @Input() optionsExcluded: string[];
  @Output() confirmation = new EventEmitter();
  @Output() cancelation = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  confirm(){
    this.confirmation.emit(false);
  }
  cancel(){
    this.cancelation.emit(false);
  }
  isIncluded(option){
    return this.optionsIncluded.indexOf(option) >=-1 ? true : false;
  }
  isExcluded(option){
    if(this.optionsExcluded.indexOf(option)>=0){
      return true;
    }
    else{
      return false;
    }
    // return this.optionsExcluded.indexOf(option) >=-1 ? true : false;
  } 

}
