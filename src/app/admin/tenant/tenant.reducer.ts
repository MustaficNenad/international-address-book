import { createReducer, on } from "@ngrx/store";
import { Tenant } from "./tenant.model";
import { TenantActions, TenantApiActions } from "./tenant.actions";

export interface TenantState {
  tenants: Tenant[];
  loading: boolean;
}

export const initialState: Tenant[] = [];

export const tenantReducer = createReducer(
  initialState,
  on(TenantActions.loadTenants, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(TenantApiActions.loadTenantsSucces, (state, { tenants }) => ({
    ...state,
    tenants,
    loading: false
  })),
  on(TenantActions.addTenant, (state, { tenant }) => [...state, tenant]),
  on(TenantActions.updateTenant, (state, { tenant }) =>
    state.map((t) => (t.id === tenant.id ? { ...t, ...tenant } : t))
  ),
  on(TenantActions.removeTenant, (state, { id }) =>
    state.filter((tenant) => tenant.id !== id)
  ),
);