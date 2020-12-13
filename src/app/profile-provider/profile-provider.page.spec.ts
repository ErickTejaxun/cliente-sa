import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileProviderPage } from './profile-provider.page';

describe('ProfileProviderPage', () => {
  let component: ProfileProviderPage;
  let fixture: ComponentFixture<ProfileProviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileProviderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileProviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
