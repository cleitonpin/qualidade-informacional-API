import * as path from 'path';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PollModule, UserModule } from './modules';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { CacheModule, CacheStore } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development'],
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        secure: false,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
      defaults: {
        from: '"No Reply" <no-reply@localhost>',
      },
      preview: true,
      template: {
        dir: path.join(__dirname, '..', 'src', 'common', 'views'),
        adapter: new HandlebarsAdapter(undefined, {
          inlineCssEnabled: true,
          inlineCssOptions: { url: ' ' },
        }),
        options: {
          strict: true,
        },
      },
    }),
    UserModule,
    PollModule,
    CacheModule.registerAsync({
      // max: 100,
      // ttl: 10, // seconds
      isGlobal: true,
      useFactory: async () => {
        const store = await redisStore({
          socket: {
            host: 'localhost',
            port: 6379,
          },
        });

        return {
          store: store as unknown as CacheStore,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
