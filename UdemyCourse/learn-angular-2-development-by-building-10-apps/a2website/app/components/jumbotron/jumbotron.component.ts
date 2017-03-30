import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'jumbotron',
    //template: 'NAVBAR'
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
    private jbtHeading:string;
    private jbtText:string;
    private jbtBtnText:string;
    private jbtBtnUrl:string;

    constructor(){
        this.jbtHeading = "Hello World";
        this.jbtText = "This is a simple hero unit.";
        this.jbtBtnText = "Read more";
        this.jbtBtnUrl = "/about";
    }
}
