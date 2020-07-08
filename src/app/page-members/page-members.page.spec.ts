import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageMembersPage } from './page-members.page';

describe('PageMembersPage', () => {
  let component: PageMembersPage;
  let fixture: ComponentFixture<PageMembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMembersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
