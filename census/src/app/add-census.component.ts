import { Component, OnInit } from '@angular/core';
import { CensusService } from './census.service';


@Component({
  selector: 'app-add-census',
  templateUrl: './add-census.component.html',
  styleUrls: ['./add-census.component.css']
})
export class AddCensusComponent implements OnInit {
  newRecord: any = {};

  constructor(private censusService: CensusService) { }

  ngOnInit(): void {
  }

  addRecord(): void {
    this.censusService.addRecord(this.newRecord).subscribe(() => {
      console.log('Record added successfully');
    });
  }
}
