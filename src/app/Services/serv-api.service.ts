import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

 
export class ServApiService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  readonly employeeAPIUrl = "https://localhost:44315/api";

  constructor(private http:HttpClient) { 

    const token = localStorage.getItem('auth');
    this._isLoggedIn$.next(!!token);
  }



  getemployeeList():Observable<any[]> {
    return this.http.get<any>(this.employeeAPIUrl + '/Employee');
  }

  addemployee(data:any) {
    return this.http.post(this.employeeAPIUrl + '/Employee', data);
  }

  updateemployee(id:number|string, data:any) {
    return this.http.put(this.employeeAPIUrl + `/Employee/${id}`, data);
  }


  login(data: any) {
    return this.http.post (this.employeeAPIUrl + `/Auth/token`, data).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('auth', response.token);
      })
    ); 
  }

  logout()
  {
    localStorage.removeItem("auth");
    this._isLoggedIn$.next(false);
  }
 
  get isUserLogged(): boolean
  {
    return  (localStorage.getItem('auth'))? true: false
  }
  getloggedStatus(): Observable<boolean>
  {
    return this._isLoggedIn$.asObservable();
  }
  deleteemployee(id:number|string) {
    return this.http.delete(this.employeeAPIUrl + `/Employee/${id}`);
  }
  
  // login(username: string, password: string) {
  //   return this.EmployeeApi.login(username, password).pipe(
  //     tap((response: any) => {
  //       this._isLoggedIn$.next(true);
  //      // localStorage.setItem('profanis_auth', response.token);
  //     })
  //   );
  // }
}