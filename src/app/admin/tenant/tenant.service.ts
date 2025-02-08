import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Tenant } from "./tenant.model";

@Injectable({ providedIn: 'root' })
export class TenantService {
    constructor(private http: HttpClient) {}
    
    getTenants(): Observable<Tenant[]> {
        return this.http.get<Tenant[]>('https://localhost:7065/api/Tenants');
     }
}
