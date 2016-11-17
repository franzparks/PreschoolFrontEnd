import { NavItem } from './nav-item';

export const NAVITEMS : NavItem[] = [

	{
		id: 1,
		navTitle : 'Schools',
		navSubTitle  : 'School Type',
		navLinksCol1  : [{ref:'schools', label:'Day Care'}, {ref:'schools', label:'Preschool'}, {ref:'schools', label:'Montesory'}],
		navLinksCol2 : [],
        navLinksCol3 :[]

	},
	{	
		id: 2,
		navTitle  : 'Parenting',
		navSubTitle  : 'Parenting Resources',
		navLinksCol1  : [{ref:'parenting', label:'Parenting Books'}, {ref:'parenting', label:'Useful Sites'}],
		navLinksCol2 : [],
        navLinksCol3 : []

	},
	{
		id: 3,
		navTitle  : 'Childrens\' Books',
		navSubTitle  : 'Books For Children',
		navLinksCol1  : [{ref:'books', label:'By Age'}, {ref:'books', label:'By Theme'}],
		navLinksCol2 : [{ref:'books', label:'By Award'}],
        navLinksCol3 : []

	},
	{
		id: 4,
		navTitle  : 'Songs List',
		navSubTitle  : 'Songs',
		navLinksCol1  : [{ref:'songs', label:'By Theme'}, {ref:'songs', label:'By Scenario'}],
		navLinksCol2 : [{ref:'songs', label:'By Title'}],
        navLinksCol3 : [{ref:'songs', label:'By Artist'}]

	},
	{
		id: 5,
		navTitle  : 'Activity List',
		navSubTitle  : 'Activities',
		navLinksCol1  : [{ref:'activities', label:'STEM'}, {ref:'activities', label:'Art'}],
		navLinksCol2 : [{ref:'activities', label:'Social studies'}],
        navLinksCol3 : []

	},
	{	
		id: 6,
		navTitle  : 'Toys List',
		navSubTitle  : 'Recommended Toys',
		navLinksCol1  : [{ref:'toys', label:'By Age'}, {ref:'toys', label:'By Development'}],
		navLinksCol2 : [],
        navLinksCol3 : []

	},
	{
		id: 7,
		navTitle  : 'Safety And Health',
		navSubTitle  : 'Safety And Health',
		navLinksCol1  : [{ref:'safety', label:'Product Reviews'}, {ref:'safety', label:'Nutrition Guide'}],
		navLinksCol2 : [{ref:'safety', label:'Recipes'}],
        navLinksCol3 : []

	},
];