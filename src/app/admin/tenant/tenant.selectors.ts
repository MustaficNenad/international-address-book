import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TenantState } from "./tenant.reducer";

export const selectTenantState = createFeatureSelector<TenantState>('tenants');

export const selectAllTenants = createSelector(
  selectTenantState,
  (state) => state?.tenants ?? [] // Provjeri da state nije undefined
);

export const selectLoading = createSelector(
  selectTenantState,
  (state) => state?.loading ?? false // Provjeri da state nije undefined
);
