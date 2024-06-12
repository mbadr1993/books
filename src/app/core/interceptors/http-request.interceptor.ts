import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      clientId: 'WebsiteConsumer',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '',
      'X-Requested-With': '*',
    }),
  });
  return next(authReq);
};
