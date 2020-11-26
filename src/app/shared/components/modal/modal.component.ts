import { Component, HostBinding, TemplateRef } from '@angular/core';
import { fade } from '../../animations/fade';
import { ModalConfig } from './interfaces/modal-config';
import { ModalRef } from './models/modal-ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['modal.component.scss'],
  animations: [fade],
})
export class ModalComponent {
  @HostBinding('@fade')
  fade = true;

  config: ModalConfig | null | undefined = null;
  modalRef: ModalRef | undefined;
}
