import { TemplateRef } from '@angular/core';

export interface ModalConfig {
  templateRef: TemplateRef<any> | null | undefined;
  title: string;
}
