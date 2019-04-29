import { NgModule } from '@angular/core';

import { CarDocSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CarDocSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CarDocSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CarDocSharedCommonModule {}
