import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Tenant } from "./tenant.model";

@Injectable({ providedIn: 'root' })
export class TenantService {
  private apiUrl = 'http://must-soft.runasp.net/admin/tenants';

  constructor(private http: HttpClient) {}
    
  getTenants(): Observable<Tenant[]> {
    return this.http.get<Tenant[]>(this.apiUrl);
  }

  addTenant(tenant: Tenant): Observable<Tenant> {
    return this.http.post<Tenant>(this.apiUrl, tenant);
  }
}
