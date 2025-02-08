import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Tenant } from "./tenant.model";

export const TenantActions = createActionGroup({
    source: 'Tenants Actions',
    events: {
      'Load Tenants': emptyProps(),
      'Add Tenant': props<{ tenant: Tenant }>(),
      'Update Tenant': props<{ tenant: Tenant }>(),
        'Remove Tenant': props<{ id: number }>(),
    },
  });
  
  export const TenantApiActions = createActionGroup({
    source: 'Tenants API Actions',
    events: {
      'Load Tenants Succes': props<{ tenants: Tenant[] }>(),
    },
  });