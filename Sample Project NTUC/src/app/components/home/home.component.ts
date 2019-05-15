import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource , MatSort} from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RestService } from '@app/services/rest.service';
import { DataService } from '@app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['deceasedNRICHash', 'dateOfDeath'];
  dataSource: any;
  nricList = [];
  pageIndex=0;
  pageSize=5;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private router: Router, private restService: RestService, private dataService: DataService) { }
  ngOnInit() {
    let user = JSON.parse(sessionStorage.getItem('user'));
    if(!user){
      this.router.navigate(['/login']);
    }
    else{
    this.getDeceasedList();
    }
  }
  viewDetails(nric) {
    this.router.navigate(['/view'], { queryParams: { nricHash: nric} });
  }
  getDeceasedList(){
    this.restService.getDeceasedList(this.pageIndex,this.pageSize).subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response.list);
      setTimeout(() => this.dataSource.paginator = this.paginator);
      setTimeout(() => this.dataSource.sort = this.sort);
      setTimeout(() => this.dataSource.paginator.length = response.size);
      });
  }
  pageChangeEvent(val: any) {
    this.pageIndex=val.pageIndex;
    this.pageSize=val.pageSize;
      this.getDeceasedList();
  }


}






