import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

x:any;
  "questions": [

		{
			"questionText": "What is this?",
			"answers": [
				{"answer": "Helicopter", "correct": true, "selected": false},
				{"answer": "Plane", "correct": false, "selected": false},
				{"answer": "Truck", "correct": false, "selected": false}
			]
		},
		{
			"questionText": "What is this?",
			"answers": [
				{"answer": "Helicopter", "correct": false, "selected": false},
				{"answer": "Plane", "correct": true, "selected": false},
				{"answer": "Truck", "correct": false, "selected": false}
			]
		},
		{
		
			"questionText": "What is this?",
			"answers": [
				{"answer": "Helicopter", "correct": false, "selected": false},
				{"answer": "Plane", "correct": false, "selected": false},
				{"answer": "Truck", "correct": true, "selected": false}
			]
		}

	]
  
  constructor() { }

  ngOnInit() {

return [...this.questions];

}

}
