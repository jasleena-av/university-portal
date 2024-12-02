import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-portel',
  templateUrl: './teacher-portel.component.html',
  styleUrls: ['./teacher-portel.component.css']
})
export class TeacherPortelComponent {
  batches = [
    {
      name: 'BSc',
      students: [
        { id: 1,name:"ree", marks: 55,grade:"B"},
        { id: 2,name:"heb", marks: 70 ,grade:"A"},
        { id: 3,name:"sdf", marks: 72,grade:"A" },
        { id: 4,name:"lio", marks: 32,grade:"B" },
        { id: 5,name:"gff", marks: 44 ,grade:"B"},
        { id: 6,name:"vbn", marks: 66,grade:"c" },
        { id: 7,name:"lkj", marks: 55,grade:"B" },
        { id: 8,name:"ert", marks: 77,grade:"A"},
        { id: 9,name:"cxz", marks: 55,grade:"c" },
        { id: 10,name:"qwr", marks: 54,grade:"B" },
       
       
      ],
    },
    {
      name: 'BCA',
      students: [
        { id: 1,name:"qwr",  marks: 57 ,grade:"A"},
        { id: 2,name:"llj",  marks: 44,grade:"c"},
        { id: 3,name:"poi",  marks: 45,grade:"c" },
        { id: 4,name:"iuy",  marks: 55,grade:"B" },
        { id: 5,name:"ghj",  marks: 50,grade:"A"  },
        { id: 6,name:"wer",  marks: 58,grade:"B"  },
        { id: 7,name:"lop",  marks: 55,grade:"A"  },
        { id: 8,name:"quwe",  marks: 59,grade:"B"  },
        { id: 9,name:"ges",  marks: 60,grade:"A"  },
        { id: 10,name:"qwrxw",  marks: 55 },
      ],
    },
    {
      name: 'BTech',
      students: [
        { id: 1,name:"qwrqq",  marks: 53,grade:"A" },
        { id: 2,name:"lljt",  marks: 44,grade:"A" },
        { id: 3,name:"opoi",  marks: 45,grade:"B" },
        { id: 4,name:"ikly",  marks: 20,grade:"D" },
        { id: 5,name:"loij",  marks: 50,grade:"B" },
        { id: 6,name:"wmkl",  marks: 44,grade:"C" },
        { id: 7,name:"cdop",  marks: 55,grade:"B" },
        { id: 8,name:"quwe",  marks: 59,grade:"B" },
        { id: 9,name:"gesasd",  marks: 60,grade:"A" },
        { id: 10,name:"pciy",  marks: 55,grade:"B" },
      ],
    },
  ];

  submitMarks() {
    console.log('Marks submitted:', this.batches);
    alert('Marks uploaded successfully!');
    localStorage.setItem('studentMarks', JSON.stringify(this.batches));
  }


}
