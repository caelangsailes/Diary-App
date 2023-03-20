import { Component, OnInit } from '@angular/core';
import { Entries } from 'src/app/models/Entries/Entries/Entries';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  //title = 'Entries';

  entries: Entries[] = [];

  inputTitle:string = "";
  inputEntry:string = "";
  inputDate:string = "";

  creationTime = new Date();
  
  constructor() {}

  ngOnInit(): void {
    this.entries = [
      {
        title: "First Entry",
        content: 'I had a good day',
        date: '20/3/2023'
      },

      {
        title: "Second Entry",
        content: 'I had a bad day',
        date: '21/3/2023'
      },
    ]  
  }

  deleteEntry(id:number) {
    this.entries = this.entries.filter((v, i) => i !== id);
  }

  addEntry () {
    this.entries.push({
      title: this.inputTitle,
      content: this.inputEntry,
      date: this.inputDate
    });

    this.inputEntry = "";
    this.inputTitle = "";
    this.inputDate = "";
  }

}
