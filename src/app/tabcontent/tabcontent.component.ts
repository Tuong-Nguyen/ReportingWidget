import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-tabcontent',
  templateUrl: './tabcontent.component.html',
  styleUrls: ['./tabcontent.component.css']
})
export class TabcontentComponent implements OnInit {
  @Input() columns = 1;
  @Input() rows = 1;
  @Input() chars = [];
  constructor() { }

  ngOnInit() {
  }
}
