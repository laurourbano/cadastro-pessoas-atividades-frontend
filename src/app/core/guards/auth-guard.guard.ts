import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('token')){
    return true;
  } else {
    const router = new Router();
    router.navigate(['/login']);
    return false;
  }
};
