import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerService } from '@nestjs-modules/mailer';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    const mockMailerService = {
      sendMail: jest.fn().mockResolvedValue(true),
    };

    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        { provide: MailerService, useValue: mockMailerService },
      ],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(AppController);
      expect(appController.getHello()).toBe('Hello');
    });
  });
});
