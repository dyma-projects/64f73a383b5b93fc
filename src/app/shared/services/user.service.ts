import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() {}

  public addUser(user: string) {
    this.users$.value.push(user);
  }
}
