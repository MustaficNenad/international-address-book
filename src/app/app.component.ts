import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from 'shared-components';
import { TenantComponent } from "./admin/tenant/tenant.component";

@Component({
    selector: 'app-root',
    imports: [TenantComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'international-address-book';
}
