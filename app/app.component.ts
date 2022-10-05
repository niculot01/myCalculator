import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myCalculator';
  toshow = '0'
  currentvalue = ''
  show = ''

  writetoinput(value: string) { 
    if(this.currentvalue == '0'){
      this.currentvalue = value
    }
    if(this.currentvalue != '0'){
      this.currentvalue = this.currentvalue + value
    }
    this.toshow = this.currentvalue
  }

  equals(){
    this.toshow = eval(this.currentvalue)
    this.currentvalue = this.toshow

  }

  clear(){
    this.currentvalue = '';
    this.toshow = '0';
  }

  back(){
    this.currentvalue = this.currentvalue.slice(0,-1)
    this.toshow = this.currentvalue;
    if(this.toshow == ''){this.toshow = '0' }

  }

  history(value: string){
    this.toshow = this.currentvalue
    
  }
}
