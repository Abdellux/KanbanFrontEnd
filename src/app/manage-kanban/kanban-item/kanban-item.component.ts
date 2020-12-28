import { Kanban } from './../kanban.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kanban-item',
  templateUrl: './kanban-item.component.html',
  styleUrls: ['./kanban-item.component.css']
})
export class KanbanItemComponent implements OnInit {

  @Input() kanban: Kanban;
  constructor() { }

  ngOnInit(): void {
  }

}
