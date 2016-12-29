import {Component} from 'angular2/core';

@Component({
  selector: 'home',
  template: `
  	<div class="panel panel-default">
			<!-- Default panel contents -->
			<div class="panel-heading">Class wise students info</div>
			<!-- Table -->
			<table class="table table-bordered">
				<tr>
					<th>9th</th>
					<th>10th</th>
					<th>11th</th>
					<th>12th</th>
				</tr>
				<tr>
					<td>xxxx</td>
					<td>xxxx</td>
					<td>xxxx</td>
					<td>xxxx</td>
				</tr>
			</table>
		</div>
  `
})
export class Standard {
  constructor() {

  }
}