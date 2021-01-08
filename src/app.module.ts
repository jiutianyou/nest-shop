// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}



// 新方法
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'

import appConfig from './config/index'

import { UserModule } from './system/user/user.module'

@Module({
  imports: [
    // 配置模块
    ConfigModule.forRoot({
      load: appConfig,
      isGlobal: true
    }),
    // 数据库
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService]
    }),
    UserModule,
  ]
})
export class AppModule {}

