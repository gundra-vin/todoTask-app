import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Taskdet } from 'src/app/taskdet';

import { map } from 'rxjs/operators';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  constructor(private http: HttpClient) { }
    public addTask(tsk) {
      return this.http.post<Taskdet>(API_URL, tsk).pipe(map(response => response));
  }

  public updTask(tsk) {
    return this.http.put<Taskdet>(API_URL, tsk).pipe(response => response);
  }

  public getallTasks() {
    return this.http.get<any[]>(API_URL).pipe(map(data => data));
  }

  public delTask(tsk) {
        return this.http.delete<any[]>(API_URL + '/' + tsk.tid).pipe(map(response => response));
  }
}
