import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boby',
  templateUrl: './boby.component.html',
  styleUrls: ['./boby.component.css']
})
export class BobyComponent implements OnInit {
  hour:number;
  greeting:string;
  todo:string=''
  value=''
  time:any='';
  //pm_am=''
  todoAdded=false;
  taskArray:[string,any,boolean][]=[];
  isComplete=false;

  constructor() {
    this.hour=new Date().getHours();
    this.greeting='';
   }

  ngOnInit(): void {
  }

  //input todo
  addTodo(event:any){
    this.value=event.target.value;
  }

  //input time
  addTime(event:any){
    this.time=event.target.value;
  }

  //add new task
  addTask(){
    if(this.value==='' || this.time===''){
        return
    }
    this.todoAdded=true;
    this.todo=this.value;
    this.taskArray.push([this.todo,this.time,this.isComplete])
    this.value==='';
    console.log(this.time)
  }

  //complete task
  complete(i:any){
    this.taskArray[i][2]=true;
  }

  //delete task
  deleteTodo(i:number){
    this.taskArray.splice(i,1)
  }

  //add greeting
   setGreeting(){
     if(this.hour>=12||this.hour<=18){
      return this.greeting='Good Evening!'
     }
     else if(this.hour>=18){
       return this.greeting='Good Evening!'
     }
     else if(this.hour<=12||this.hour<=18){
       return this.greeting='Good Morning!'
     }

   }
}
