import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
  .setTitle("Careers API")
  .setDescription("main backend API for the careers portal")
  .setVersion("1.0")
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api',app,document);
  
  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
