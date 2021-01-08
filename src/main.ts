import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 设置所有 api 访问前缀
  app.setGlobalPrefix('/api')
  // 接口文档 swagger 参数
  const options = new DocumentBuilder().setTitle('nest-shop 工作流 app').setDescription('nest-shop API 文档').setVersion('1.1.0').addBearerAuth().build()
  const document = SwaggerModule.createDocument(app, options)
  // 设置 swagger 网址
  SwaggerModule.setup('docs', app, document)
  
  await app.listen(3000);
}
bootstrap();
