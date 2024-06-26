import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ReflectableDecorator, Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { UserRoles } from '../users/user-roles';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean {
    const requireRoles = this.reflector.getAllAndOverride<UserRoles[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ])

    if (!requireRoles){
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    return requireRoles.some((role) => user.roles?.include(role));
  }
}
