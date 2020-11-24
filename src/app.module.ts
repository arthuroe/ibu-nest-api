import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { PatientModule } from './patient/patient.module';
import { TreatmentModule } from './treatment/treatment.module';
import { DrugsModule } from './drugs/drugs.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, UserModule, AuthenticationModule, PatientModule, TreatmentModule, DrugsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
