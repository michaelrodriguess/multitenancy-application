import { User } from '@prisma/client'

export class PartnerUserPresenter{

    constructor(readonly user: User){}
    
    toJSON(){
        return {
            id: this.user.id,
            email: this.user.email,
            roles: this.user.roles,
            createAt: this.user.createAt,
            updateAt: this.user.updateAt,
        };
    }

}