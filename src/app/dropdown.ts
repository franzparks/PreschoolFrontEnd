import {Component, Input} from '@angular/core';

@Component({
	selector:'dropdown',
	template: `
	<ng-content></ng-content>

	`
})

export class  DropDown {
	@Input() private open: boolean;
	constructor(){

	}
}

@Component({
	selector:'dropdown-menu',
	host: {
		'class': 'dropdown-menu'
	},
	template: `<ng-content></ng-content>`
})

export class  DropDownMenu {
	constructor(){}
}


