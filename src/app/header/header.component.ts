import { Component } from "@angular/core";

@Component({
  // Learn: 2 least 2 words with to prevent overide html selector, app-header instead of header
 selector: 'app-header',
// Learn: for simplicitym, we can use template: '<h1> Hello World </h1>'
 templateUrl: './header.component.html',
//  Learn: Angular have standalone and module-based component
 standalone: true,
 styleUrl: "./header.component.css"
})
export class HeaderComponent {}
