import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  answer:string='';
  answerDisplay:string='';
  showSpinner:boolean=false;
  showAnswer(){
  	this.showSpinner=true;

  	setTimeout(()=>{
  		this.answerDisplay=this.answer;
  		this.showSpinner=false;
	  },2000)
  }
}
