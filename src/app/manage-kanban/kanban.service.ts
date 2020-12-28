import { EventEmitter } from '@angular/core';
import { Kanban } from './kanban.model';

export class KanbanService {
  kanbansChanged: EventEmitter<Kanban[]> = new EventEmitter<Kanban[]>();
  private Kanbans: Kanban[] = [
    new Kanban('Kanban Project', 5, 'private' ),
    new Kanban('Open Street Art Project', 6, 'public' )
  ];

  getKanbans() {
    return this.Kanbans.slice();
  }

  addKanban( newKanban: Kanban) {
    this.Kanbans.push(newKanban);
    this.kanbansChanged.emit(this.Kanbans.slice());
  }
}
