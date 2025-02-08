import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tenant } from './tenant.model';
import * as fromTenantSelectors from './tenant.selectors';
import { TenantActions } from './tenant.actions';

@Component({
  selector: 'mustsoft-tenant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantListComponent implements OnInit {
  tenants$: Observable<Tenant[]>;
  loading$: Observable<boolean>;
  hoveredTenant: number | null = null;  // Track hovered tenant row ID
  tooltipPosition = { top: 0, left: 0 };  // Track the position of the tooltip

  constructor(private store: Store) {
    this.tenants$ = this.store.select(fromTenantSelectors.selectAllTenants);
    this.loading$ = this.store.select(fromTenantSelectors.selectLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(TenantActions.loadTenants());
  }

  // Set hovered tenant ID and update the tooltip position
  onRowHover(tenantId: number, event: MouseEvent): void {
    this.hoveredTenant = tenantId;
    this.updateTooltipPosition(event);
  }

  // Reset hovered tenant ID
  onRowLeave(): void {
    this.hoveredTenant = null;
  }

  // Update tooltip position based on mouse coordinates
  updateTooltipPosition(event: MouseEvent): void {
    const tooltip = document.querySelector('.audit-info');
    if (tooltip) {
      const tooltipWidth = tooltip.clientWidth;
      const tooltipHeight = tooltip.clientHeight;

      // Set tooltip position relative to mouse cursor
      this.tooltipPosition = {
        top: event.clientY + 10,  // 10px offset from cursor
        left: event.clientX + 10  // 10px offset from cursor
      };

      // Optional: Adjust the tooltip position to avoid going out of view
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // If the tooltip goes off the right edge, adjust the left position
      if (this.tooltipPosition.left + tooltipWidth > windowWidth) {
        this.tooltipPosition.left = windowWidth - tooltipWidth - 10;
      }

      // If the tooltip goes off the bottom edge, adjust the top position
      if (this.tooltipPosition.top + tooltipHeight > windowHeight) {
        this.tooltipPosition.top = windowHeight - tooltipHeight - 10;
      }
    }
  }
}
