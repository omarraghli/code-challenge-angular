import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthResponseDTO } from '../../interfaces/auth-response-dto';
import { UserDTO } from '../../interfaces/user-dto';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  private baseUrl = 'http://localhost:9090/api/users';


  generateAndDownloadUsers(count: number): Observable<void> {
    return this.httpClient.get<void>(`${this.baseUrl}/generate?count=${count}`);
  }

  uploadUserFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.post<any>(`${this.baseUrl}/batch`, formData);
  }

  getUsers(page: number, size: number): Observable<any[]> {
    const headers = this.getHeaders();
    return this.httpClient.get<any>(`${this.baseUrl}/getUsers?page=${page}&size=${size}`,{ headers }).pipe(map((page: any) => page.content));
  }

  getUserByEmail(email: string): Observable<UserDTO> {
    const headers = this.getHeaders();
    return this.httpClient.get<UserDTO>(`${this.baseUrl}/email/${email}`,{ headers });
  }

  getUserByUsername(username: string): Observable<UserDTO> {
    const headers = this.getHeaders();
    return this.httpClient.get<UserDTO>(`${this.baseUrl}/${username}`,{ headers });
  }

  getMyUser(): Observable<UserDTO> {
    const headers = this.getHeaders();
    return this.httpClient.get<UserDTO>(`${this.baseUrl}/me`, { headers });
  }


  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      // Token is not available, redirect to the login page
      this.router.navigate(['/login']);
    }

    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
}
