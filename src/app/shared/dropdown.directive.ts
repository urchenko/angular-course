import { Directive, HostListener, HostBinding, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]',
})
export class DropdowDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('document: click', ['$event']) toogleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private elRef: ElementRef) {}
}