import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class MessangerService {

  subject = new Subject();
  totalval;

  constructor() { }

  sendMessage(product){
    this.subject.next(product)

  }

  getMessage(){   
    return this.subject.asObservable()
  }
 }
