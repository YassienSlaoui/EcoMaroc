import { HttpInterceptorFn } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { inject } from '@angular/core';

export const jwtInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const loginservice = inject(LoginService);
  const token = loginservice.getToken();  

  if (token) {
    const authReq = req.clone({
      setHeaders: { 
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  return next(req);
};
