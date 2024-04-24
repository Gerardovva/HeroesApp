import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';


export const canMatchFn: CanMatchFn = (
    route: Route,
    segments: UrlSegment[]
) => {
    const authService = inject(AuthService);
    const router = inject(Router);
 
    return authService.checkAuthentication().pipe(
        tap( isAutenticated => {
            if(!isAutenticated){
                router.navigate(['./auth/login'])
            }
        })
    );

}

export const canActivateFn: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.checkAuthentication().pipe(
        tap( isAutenticated => {
            if(!isAutenticated){
                router.navigate(['./auth/login'])
            }
        })
    );
}



