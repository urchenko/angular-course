import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-component',
    template: `<h2 class="warning">Warning Message!</h2>`,
    styles: [`
        .warning {
            display: flex;
            justify-content: center;
            margin: 0;
            background: red;
            color: white;
        }
    `],
})
export class WarningAlertComponent {}
