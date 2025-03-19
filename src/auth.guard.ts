import { CanActivate, ExecutionContext } from '@nestjs/common';
import { constrainedMemory } from 'process';
import { Observable } from 'rxjs';

export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const isAuntheticated = request.headers['authorization'] ? true : false;
    return isAuntheticated;
  }
}
