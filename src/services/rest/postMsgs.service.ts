import * as dotenv from 'dotenv';
if ( process.env.NODE_ENV != 'production' ) {
  dotenv.config();
}

import * as request from 'request-promise';
import { slackChannel } from '../../../src/common/configs/slack.config';
import { botMessageToken } from '../../../src/common/configs/botMsg.config';

export async function postMsgToSlack ( message: string ): Promise<any> {


  const payload = {
    "channel": slackChannel,
    "text": message
  }

  const requestOptions = {
    method: 'POST',
    uri: 'https://slack.com/api/chat.postMessage',
    body: payload,
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${botMessageToken}`
    },
    json: true
  };

  try {
    return request.post( requestOptions );
  }
  catch ( erro ) {
    console.log( `Erro ao tentar enviar uma mensagem via postMessage API do slack: ${erro.message}` );
  }
}
