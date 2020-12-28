import { KanbanService } from './kanban.service';
import { Kanban } from './kanban.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-kanban',
  templateUrl: './manage-kanban.component.html',
  styleUrls: ['./manage-kanban.component.css'],
  providers: [KanbanService]
})
export class ManageKanbanComponent implements OnInit {
  kanbans: Kanban[];

  constructor(private router: Router, private kanbanService: KanbanService) { }

  ngOnInit(): void {
    this.kanbans = this.kanbanService.getKanbans();
    this.kanbanService.kanbansChanged
      .subscribe((kanbans: Kanban[]) => {
        this.kanbans = kanbans;
      })
  }
  logOut() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/home/login'])
  }

}
