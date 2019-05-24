import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private loggingService: LoggingService, private routering: Router) {}

  printMessage:string = "Print Test Message";

  ngOnInit() {
    this.loggingService.logMessage(this.printMessage);

/*     setTimeout(() => {
      this.routering.navigate(['/users']);
    }, 5000);
 */  
  }

}
