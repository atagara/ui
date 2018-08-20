import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';  

import { Product } from '../../product/models';  

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
}
