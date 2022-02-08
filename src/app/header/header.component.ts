import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isVisible:boolean=false;
  Num=Math.floor(Math.random()*10);
  constructor() { 
    this.Num>5 ? this.isVisible=true : this.isVisible===false;
  }

  ngOnInit(): void {
  }
  
}
