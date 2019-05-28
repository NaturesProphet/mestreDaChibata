import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { notifySlack } from './services/slack/notifications';

@Controller()
export class AppController {
  constructor( private readonly appService: AppService ) { }

  @Get()
  getHello (): string {
    return this.appService.getHello();
  }

  @Post( 'teste' )
  getMsg ( @Res() res, @Body() body ) {
    res.status( 200 ).send( body );
    notifySlack( JSON.stringify( body ), 'parrot' );
  }
}
