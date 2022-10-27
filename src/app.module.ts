import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './Student/student.module';
import { StrategyTextModule } from './strategyText/strategyText.module';
import { StrategyVideoModule } from './strategyVideo/strategyVideo.module';
import { CourseModule } from './course/Course.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    CourseModule,
    AuthModule,
    StrategyTextModule,
    StrategyVideoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
