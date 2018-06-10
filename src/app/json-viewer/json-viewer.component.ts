import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.css']
})
export class JsonViewerComponent implements OnChanges {
  @Input() data;
  expanded = true;

  keys= [];

  constructor() { }

  drawTree() {
    this.data = typeof this.data === 'string' ? JSON.parse(this.data) : this.data;
    this.keys = Object.keys(this.data).map(item => {
      return {
        key: item,
        expanded: false
      }
    })
  }

  expandTree(tree) {
    if(this.isExpandable(this.data[tree.key])) {
      tree.expanded = !tree.expanded;
    }
  }

  isExpandable(tree) {
    if(!(typeof tree === 'string' || tree === null && tree !== undefined)) {
      return true;
    }
    return false;
  }

  isArray(item) {
    return Array.isArray(item);
  }

  ngOnChanges() {
      this.drawTree();
  }

  i

}
