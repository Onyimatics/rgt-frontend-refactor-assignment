import {Component, OnInit} from '@angular/core';
import {AboutService} from '../../services/about.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

public companyMembers: any[] = [];


  constructor(
    private aboutService: AboutService,
  ) { }

  ngOnInit(): void {
    this.getCompanyMembers();
  }

  getCompanyMembers() {
    this.companyMembers = this.aboutService.getCompanyMembers();
  }

}
