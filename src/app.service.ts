import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'X-Dev API v1.0.0'
    };
  }
}
