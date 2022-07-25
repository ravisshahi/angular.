import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../sevices/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showAddTask: boolean = false;
  subscription ?: Subscription;
  title = 'Task Tracker';
  constructor(private uiService : UiService , private router:Router) { 
    this.subscription = this.uiService.ontoggle().subscribe((value)=> (this.showAddTask = value));
  }

  ngOnInit(): void {
  }
  
  toggleTask(){
    console.log("toggle");
    this.uiService.toogleAddTask();
  }

  toggleMultiTask(){
    console.log("MultiTasking");
  }

  hasRoute(route: string)
  {
    return this.router.url === route;
  }
}
