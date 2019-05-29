import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { notifySlack } from './services/slack/notifications';
import { postMsgToSlack } from './services/rest/postMsgs.service';

@Controller()
export class AppController {
  constructor( private readonly appService: AppService ) { }

  @Get()
  getHello (): string {
    return this.appService.getHello();
  }

  @Post( 'teste' )
  getMsg ( @Res() res, @Body() body ) {
    //console.log( body );
    console.log( `----------------------\nTipo: ${body.event.type}\n----------------` );
    res.status( 200 ).send( body );
    notifySlack( '@mestredachibata haha' );
    postMsgToSlack( 'Mandou me chamar?' );
  }
}
