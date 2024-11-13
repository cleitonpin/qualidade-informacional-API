import { MailerService } from '@nestjs-modules/mailer';
import { Address } from '@nestjs-modules/mailer/dist/interfaces/send-mail-options.interface';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(
    private readonly mailerService: MailerService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) { }

  async sendEmail(
    to: string | Array<string | Address> | Address,
    html: string,
    subject: string,
    context?: any,
  ) {
    await this.mailerService.sendMail({
      to,
      template: `${html}.hbs`,
      subject,
      context,
    });
  }

  async setCacheKey(key: string, value: string): Promise<void> {
    const THREE_MINUTES = 1000 * 60 * 3;
    await this.cacheManager.set(key, value, THREE_MINUTES);
  }

  async getCacheKey(key: string): Promise<string> {
    return await this.cacheManager.get(key);
  }
}
