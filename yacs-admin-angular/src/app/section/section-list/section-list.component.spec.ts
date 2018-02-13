import { async, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing' ;
import { SectionListComponent } from './section-list.component';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {FakeYacsService} from '../../services/fake-yacs.service';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryDataService} from '../../services/in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {YacsService} from '../../services/yacs.service';
describe('SectionListComponent', ()=>{
  let component: SectionListComponent;
  let fixture: ComponentFixture<SectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(    InMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: true, delay: 100} )],
      declarations: [ SectionListComponent ],
      providers: [
        {provide: YacsService, useClass: FakeYacsService}]
    })
    .compileComponents();
  }));

   beforeEach(() => {
    fixture = TestBed.createComponent(SectionListComponent);
    component = fixture.componentInstance;
    spyOn(component, 'getSections');

    fixture.detectChanges();

    fixture.whenStable().then(()=>{
      fixture.detectChanges();
    });
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should display a header called \"All Sections\"', ()=>{
    var header=document.getElementsByTagName('h2')[0];
    expect(header.textContent).toMatch('All Sections');
  });

  it('should display the table',() => {
    expect(document.getElementsByClassName('table')).toBeTruthy();
  });
});