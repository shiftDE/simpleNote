import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class LoggingService {

  logMessage(grabText: string) {
    console.log(grabText);
  }

  constructor() { }
}
