import {Injectable} from '@angular/core';

//The @Injectable() decorator specifies that the angular can use this class in Dependency Injection system.
//The metadata providedIn: 'root' means that FollowService is visible throughout the application
@Injectable({
    providedIn: 'root'
})

export class FollowService{
    constructor() { }
}