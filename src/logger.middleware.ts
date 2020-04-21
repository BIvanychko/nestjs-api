import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        console.log(`Request: ${JSON.stringify(req.params)}, ${req.method}, ${JSON.stringify(req.body)}`);
        next();
    }
};