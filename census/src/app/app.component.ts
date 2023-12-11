import { Component, OnInit } from '@angular/core';
import { CensusService } from './census.service';


@Component({
  selector: 'app-census-list',
  templateUrl: './census-list.component.html',
  styleUrls: ['./census-list.component.css']
})
export class AppComponent implements OnInit {
  censusRecords: any[] = []; // Add the initializer

  constructor(private censusService: CensusService) { }


  ngOnInit(): void {
    this.censusService.getRecords().subscribe(data => {
      this.censusRecords = data;
    });
  }
}
