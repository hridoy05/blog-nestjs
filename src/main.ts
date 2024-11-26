import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  /**
   * swagger configuration
   */
  const config = new DocumentBuilder()
    .setTitle("Nestjs blog api")
    .setDescription("Use the base APi URL as http://localhost:3000")
    .setVersion("1.0")
    .addServer("http://localhost:3000")
    .build();

  //instance document
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  await app.listen(3000);
}

bootstrap();
