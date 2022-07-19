import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { U1Service } from 'src/app/services/u1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title = 'hola de rolelao itne waoh homepo';
  showAddproduct:boolean=false;
  subscription?:Subscription;
  U1Service: any;

  constructor(
    private u1Service: U1Service,
    private router: Router
     ) { 
    this.subscription = this.u1Service.ontoggle()
                                      .subscribe(
                                      (value) =>(this.showAddproduct=value)
                                      )

  }

  ngOnInit(): void {
  }

  toggleTask(){
    console.log("toggle");
    this.u1Service.toggleAddproduct();
  }

  hasRoute(route:string){
    return this.router.url ===route;
  }
}