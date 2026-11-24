// Referenced these docs: https://angular.dev/guide/http/making-requests

import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Service()
export class Users {
    private http = inject(HttpClient);
    private baseUrl = 'http://localhost:3000/users';

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl);
    }

    getUserById(id: string): Observable<User> {
        return this.http.get<User>(`${this.baseUrl}/${id}`);
    }
}
