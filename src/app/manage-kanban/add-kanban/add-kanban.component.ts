import { KanbanService } from './../kanban.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit} from '@angular/core';
import { Kanban } from './../kanban.model';
@Component({
  selector: 'app-add-kanban',
  templateUrl: './add-kanban.component.html',
  styleUrls: ['./add-kanban.component.css']
})

export class AddKanbanComponent implements OnInit {

  kanbanForm: FormGroup;

  constructor(private KanbanService: KanbanService) { }

  ngOnInit(): void {
    this.kanbanForm = new FormGroup ({
      'name': new FormControl('',[Validators.required]),
      'columnNumber': new FormControl(2, [Validators.required, Validators.min(2)]),
      'state': new FormControl('', Validators.required)
    })
  }

  addKanban() {
    const name = this.kanbanForm.get('name').value;
    const columnNumber = this.kanbanForm.get('columnNumber').value;
    const state = this.kanbanForm.get('state').value;
    const newKanban: Kanban = new Kanban(name, columnNumber, state)
    this.kanbanForm.reset();

    this.KanbanService.addKanban(newKanban);
  }

}
