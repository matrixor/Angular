import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'navbar',
    //template: 'NAVBAR'
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
    branding = 'MyWebsite';
}
