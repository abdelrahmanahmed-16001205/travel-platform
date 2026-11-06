import { Global, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { RolesGuard } from './guards/roles.guard';

@Global()
@Module({
  imports: [PassportModule, JwtModule.register({ secret: process.env.JWT_SECRET, signOptions: { expiresIn: '30m' } })],
  providers: [JwtStrategy, RolesGuard],
  exports: [JwtModule, PassportModule, RolesGuard],
})
export class CommonModule {}