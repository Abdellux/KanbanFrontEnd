export class Kanban {
  id: number
  name: string
  state: string
  columnNumber: number

  constructor(name: string, columnNumber: number, state: string) {
    this.name = name;
    this.columnNumber = columnNumber;
    this.state = state;
  }
}
