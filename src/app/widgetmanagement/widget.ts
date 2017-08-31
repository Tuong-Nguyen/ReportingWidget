export class Widget {
  id: number;
  name: string;
  type: string;
  dataStream: string;
  defaultSize: WidgetSize;

  constructor(id: number, name: string, type: string, dataStream: string, defaultSize: WidgetSize) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.dataStream = dataStream;
    this.defaultSize = defaultSize;
  }
}

export class WidgetSize {
  rows: number;
  columns: number;

  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
  }
}
