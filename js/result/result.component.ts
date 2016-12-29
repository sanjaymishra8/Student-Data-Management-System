import {Component} from 'angular2/core';

@Component({
  selector: 'home',
  template: `
  	<div class="panel panel-default">
		<!-- Default panel contents -->
		<div class="panel-heading">Student's Result</div>
		<!-- Table -->
		<table class="table table-bordered">
			<tr>
				<th>English</th>
				<th>Hindi</th>
				<th>Maths</th>
				<th>Science</th>
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
export class Result {
  constructor() {

  }
}