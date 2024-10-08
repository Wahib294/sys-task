import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RoleModule } from './role/role.module';
import { StaffModule } from './staff/staff.module';
import { BugreportModule } from './bugreport/bugreport.module';
import { FileuploadModule } from './fileupload/fileupload.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './strategies/constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { RoleService } from './role/role.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: "127.0.0.1",
        port: 5432,
        username: 'postgres',
        password: "123",
        database: "bug_tracker",
        synchronize: true,
        entities: [__dirname + '/../**/*.entity.js'],
        logging: true,
      }),
    }),
    RoleModule,
    StaffModule,
    BugreportModule,
    FileuploadModule,
    AuthModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, JwtStrategy],
})
export class AppModule {}
