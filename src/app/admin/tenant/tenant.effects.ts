import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TenantActions, TenantApiActions } from "./tenant.actions";
import { catchError, EMPTY, map, mergeMap, switchMap, tap } from "rxjs";
import { Tenant } from "./tenant.model";
import { TenantService } from "./tenant.service";

@Injectable()
export class TenantEffects {
    constructor(private actions$: Actions, private tenantService: TenantService) {}

    loadTenants$ = createEffect(() =>
        this.actions$.pipe(
          ofType(TenantActions.loadTenants),
          switchMap(() =>
            this.tenantService.getTenants().pipe(
              map((tenants) => TenantApiActions.loadTenantsSucces({ tenants })),
              catchError(() => EMPTY)
            )
          )
        )
      );
    
}
