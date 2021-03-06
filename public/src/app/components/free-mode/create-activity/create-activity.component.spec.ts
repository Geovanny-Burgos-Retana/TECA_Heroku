import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateActivityComponent } from './create-activity.component';

describe('CreateActivityComponent', () => {
  let component: CreateActivityComponent;
  let fixture: ComponentFixture<CreateActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateActivityComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
