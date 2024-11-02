import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IItem } from '../Interfaces/item.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  public searchItems: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private readonly http: HttpClient) {}

  getItems(): Observable<IItem[]> {
    return this.http.get('../../../assets/json/items.json') as Observable<
      IItem[]
    >;
  }
}
