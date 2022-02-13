import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 time:any;
  constructor() { 
    const today=new Date()
    this.time=today
  }

  ngOnInit(): void {
  
  }
  
}
