import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModalConfirmComponent } from './delete-modal-confirm.component';

describe('DeleteModalConfirmComponent', () => {
  let component: DeleteModalConfirmComponent;
  let fixture: ComponentFixture<DeleteModalConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteModalConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteModalConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
