import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-portel',
  templateUrl: './parent-portel.component.html',
  styleUrls: ['./parent-portel.component.css']
})
export class ParentPortelComponent implements OnInit {
  batches: any[] = [];


  ngOnInit() {
    const data = localStorage.getItem('studentMarks');
    if (data) {
      this.batches = JSON.parse(data);
    }
  }

}
