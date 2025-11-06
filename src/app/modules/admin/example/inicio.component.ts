import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'example',
    standalone   : true,
    templateUrl  : './inicio.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class InicioComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
