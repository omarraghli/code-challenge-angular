import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponseDTO } from '../../interfaces/auth-response-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:9090/api/auth';

  constructor(private httpClient: HttpClient) { }

  authenticateUser(authenticationRequest: any): Observable<AuthResponseDTO> {
    return this.httpClient.post<AuthResponseDTO>(`${this.baseUrl}`, authenticationRequest);
  }


  logout(): void {
    // Check if the token exists in localStorage before attempting to delete
    if (localStorage.getItem('accessToken')) {
      // Remove the item from localStorage
      localStorage.removeItem('accessToken');
    } else {
      console.log('Item not found in localStorage.');
    }
  }
}
