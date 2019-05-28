import { setEnvironment } from './services/env.service';
setEnvironment();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { portaPrincipal } from './common/configs/node';


async function bootstrap () {
  const app = await NestFactory.create( AppModule );
  await app.listen( portaPrincipal );
}
bootstrap();
