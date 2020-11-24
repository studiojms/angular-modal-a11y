import { Component, TemplateRef, ViewChild } from '@angular/core';
import {
  ModalRef,
  ModalService,
} from './shared/components/modal/service/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('modal')
  modalTemplateRef: TemplateRef<any> | null = null;

  firstName = 'John';

  modalRef: ModalRef | null = null;

  constructor(private modalService: ModalService) {}

  show() {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }
}
