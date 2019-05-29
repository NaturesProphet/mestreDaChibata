import * as dotenv from 'dotenv';
if ( process.env.NODE_ENV != 'production' ) {
    dotenv.config();
}
/*
Modulo que envia notificações ao slack e printa informações no terminal
*/
import * as request from 'request-promise';
import { slackChannel, slackWebHook } from '../../common/configs/slack.config';
import { icon, botName } from '../../../src/common/configs/botMsg.config';



export async function notifySlack ( message: string ): Promise<any> {


    const payload = {
        "channel": slackChannel,
        "icon_emoji": icon,
        "username": botName,
        "text": message
    }

    const requestOptions = {
        method: 'POST',
        uri: `${slackWebHook}`,
        body: payload,
        json: true
    };

    try {
        return request.post( requestOptions );
    } catch ( erro ) {
        console.log( `Erro ao tentar enviar uma notificação ao slack: ${erro.message}` );
    }
}
