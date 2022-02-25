import { Injectable } from '@angular/core';
import {CompanyMembers} from '../data/company-members';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  getCompanyMembers():any[] {
    return CompanyMembers;
  }
}
