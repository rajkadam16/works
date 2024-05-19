import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyCompoComponent } from './heavy-compo.component';

describe('HeavyCompoComponent', () => {
  let component: HeavyCompoComponent;
  let fixture: ComponentFixture<HeavyCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeavyCompoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeavyCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
