import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request...');
    // get authorization
    const authHeaders = req.headers.authorization
    if(authHeaders){
      next();
    }else{
      throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);
    }
  }
}
