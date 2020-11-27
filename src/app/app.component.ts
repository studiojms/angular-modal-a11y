import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { ModalService } from './shared/components/modal/service/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('modal')
  modalTemplateRef: TemplateRef<any> | null = null;

  firstName = 'John';

  modalRef: ModalRef | null = null;

  form: FormGroup | null = null;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['John', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      info: [false],
    });
  }

  show() {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }

  submit(): void {
    if (this.form?.valid) {
      console.log(this.form?.value);
      this.modalRef?.close();
    }
  }
}
