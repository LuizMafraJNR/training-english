import { Component } from "@angular/core";

@Component({
    selector: 'app-top',
    // selector: '[app-top]' (atributo)
    // selector: '.app-top' (class)
    templateUrl: './topo.component.html',
    // template inline template: '<h1>Ola</h1>'
    //style inline styles: [`.exemplo { color: red}`],
    styleUrls: ['./topo.component.css']
})
export class TopoComponent {
    public titulo: string = 'Aprendendo Inglês'
}