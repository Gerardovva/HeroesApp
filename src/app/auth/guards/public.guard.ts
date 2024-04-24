import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs';


export const canMatchFn: CanMatchFn = (
    route: Route,
    segments: UrlSegment[]
) => {
    const authService = inject(AuthService);
    const router = inject(Router);
 
    return authService.checkAuthentication().pipe(
        tap( isAutenticated => {
            if(isAutenticated){
                router.navigate(['./heroes/list'])
            }
        }),
        map(isAutenticated => !isAutenticated)
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
                router.navigate(['./heroes/list'])
            }
        }),
        map(isAutenticated => !isAutenticated)
    );
}



