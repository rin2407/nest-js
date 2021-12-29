import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { PostModule } from './post/post.module';

@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'rinnv',
      password: 'rinnv123',
      database: 'user',
      entities: [ __dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PostModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('user');
  }
}
