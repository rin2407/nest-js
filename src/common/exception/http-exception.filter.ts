import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const message: any = exception?.getResponse()
    console.log(message)
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    // const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    let messageRes = ''
    switch (status) {
      case 400:
        messageRes = message?.message[0]
        break;
      case 404:
        messageRes = 'Not found'
        break;
      default:
        messageRes = message?.message
        break;
    }
    response
      .status(status)
      .json({
        statusCode: status,
        message: messageRes
      });
  }
}