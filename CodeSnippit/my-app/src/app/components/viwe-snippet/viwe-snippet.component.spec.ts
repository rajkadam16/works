import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViweSnippetComponent } from './viwe-snippet.component';

describe('ViweSnippetComponent', () => {
  let component: ViweSnippetComponent;
  let fixture: ComponentFixture<ViweSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViweSnippetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViweSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
