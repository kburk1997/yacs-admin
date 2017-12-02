import { Component, OnInit, Input } from '@angular/core';
import {School} from '../school';
import {FakeYacsService} from '../../fake-yacs.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css']
})
export class SchoolDetailComponent implements OnInit {

  @Input () school: School;
  constructor(private yacsService: FakeYacsService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  getSchool(id: number){
    this.yacsService.getSchoolByID(id)
      .subscribe(school=>this.school = school);
  }

  ngOnInit() {
    let id: number;
    this.route.params.subscribe(params=>{id=+params['id']});
    this.getSchool(id);
  }

  save(name){
    console.log('new name: '+name);
  }

  cancel(name){
    console.log('cancelling changes');
  }
  goBack(){
    this.location.back();
  }

}