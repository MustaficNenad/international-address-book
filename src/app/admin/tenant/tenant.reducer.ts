import { createReducer, on } from "@ngrx/store";
import { Tenant } from "./tenant.model";
import { TenantActions, TenantApiActions } from "./tenant.actions";

export const initialState: Tenant[] = [];

export const tenantReducer = createReducer(
  initialState,
  on(TenantApiActions.loadTenantsSucces, (_state, { tenants }) => tenants),
  on(TenantActions.addTenant, (state, { tenant }) => [...state, tenant]),
  on(TenantActions.updateTenant, (state, { tenant }) =>
    state.map((t) => (t.id === tenant.id ? { ...t, ...tenant } : t))
  ),
  on(TenantActions.removeTenant, (state, { id }) =>
    state.filter((tenant) => tenant.id !== id)
  ),
);