import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from './service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'taskmanagement';
  data: any;
  constructor(private appService:ServiceService){}
  ngOnInit(): void {
      this.createForm();
      this.getDetails();
  }
  tid:any
  taskForm!:FormGroup
  createForm():void{
    this.taskForm=new FormGroup({
      description:new FormControl('',Validators.required)
    })
  }
  get formControls(){
    return  this.taskForm.controls
  }
  submitForm(){
    console.warn(this.taskForm.value)
    this.AddTask();
  }
  // saveData(){
  //   this.AddTask();
  // }
  AddTask():void{
    const body={...this.taskForm.value}
    console.warn(body)
    this.appService.addTask(body).subscribe(()=>console.warn("done"))
    
  }
  getDetails(){
    this.appService.getDetails().subscribe((value:any)=>{
      this.data=value;
      console.warn(this.data)
    })
  }
  DeleteItem(item:any){
    const id=item.tid
    const body={
      tid:id
    }
    this.appService.deleteUSer(body).subscribe(()=>{console.warn("done")});
  }

  finishItem(item:any){
    const id=item.tid
    const body={
      tid:id
    }
    this.appService.finishTask(body).subscribe(()=>{console.warn("done")});
  }
  ngoAccepting(item:any){
    const id=item.tid
    console.warn(id)
    const body={
      tid:id,
      ...this.taskForm.value
    }
    console.warn(body)
    // this.user.ngoAccepting(b).subscribe((value)=>{
    //   // console.warn(value);
    //   this.data1=value
    //   console.log(this.data1)
    // });
    this.appService.updateDetail(body).subscribe(()=>console.warn("done"));
  
  }




}
