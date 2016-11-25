import {Component, Input} from '@angular/core';

@Component({
	selector:'dropdown',
	template: `<div> class="dropdown" [class.open]="open">
	<ng-content></ng-content>
	</div>
	`
})

export class  DropDown {
	@Input() private open: boolean;
}

@Component({
	selector:'dropdown-menu',
	host: {
		'class': 'dropdown-menu'
	},
	template: `<ng-content></ng-content>`
})

export class  DropDownMenu {}


