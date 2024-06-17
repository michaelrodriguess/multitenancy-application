import { Injectable, Scope } from '@nestjs/common';
import { Partner } from '@prisma/client';

// type of services visibilites

//1 - shared service - singleton this is default
//2 - scope service | request service
//3 - transient service


@Injectable({
    scope: Scope.REQUEST,
})
export class TenantService {
    private tenant: Partner;

    setTenant(tenant: Partner) {
        this.tenant = tenant;
    }

    getTenant() {
        return this.tenant;
    }

}
