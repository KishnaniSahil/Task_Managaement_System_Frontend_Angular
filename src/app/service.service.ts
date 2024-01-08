import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConstants } from './Constants/applicationConstant';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private httpClient:HttpClient) { 
  }
  addTask(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/taskDetails`,body);
  }
  getDetails():Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/getTask`);
  }
  updateDetail(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/updateTask`,body)
  }
  deleteUSer(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/deleteTask`,body)
  }

  finishTask(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/finishTask`,body)
  }
}
