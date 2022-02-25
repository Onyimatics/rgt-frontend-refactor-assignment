import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public companyMembers = [
    {
      img:"https://source.unsplash.com/200x200",
      imgAlt:"Jane",
      name:"Jane Doe",
      title:"CEO & Founder",
      desc:"Some text that describes me lorem ipsum ipsum lorem.",
      email:"jane@example.com"
    },
    {
      img:"https://source.unsplash.com/200x201",
      imgAlt:"Mike",
      name:"Mike Ross",
      title:"Art Director",
      desc:"Some text that describes me lorem ipsum ipsum lorem.",
      email:"mike@example.com"
    },
    {
      img:"https://source.unsplash.com/200x202",
      imgAlt:"John",
      name:"John Doe",
      title:"Designer",
      desc:"Some text that describes me lorem ipsum ipsum lorem.",
      email:"john@example.com"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
