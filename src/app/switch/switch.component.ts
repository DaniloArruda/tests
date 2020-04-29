import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// import { ValueAccessorBase } from '../value-accessor-base';

@Component({
    selector: 'switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => SwitchComponent)
    }]
})
export class SwitchComponent {
    //  extends ValueAccessorBase<boolean>
    @Input() block: string;

    value = false;  // attribute from ValueAccessorBase

    constructor() {
      // super();
    }

    onClick() {
        this.value = !this.value;
    }
}
