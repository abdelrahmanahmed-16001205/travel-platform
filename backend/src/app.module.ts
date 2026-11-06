import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { AirlinesModule } from './airlines/airlines.module';
import { FlightsModule } from './flights/flights.module';
import { FlightBookingsModule } from './flight-bookings/flight-bookings.module';
import { HotelsModule } from './hotels/hotels.module';
import { HotelBookingsModule } from './hotel-bookings/hotel-bookings.module';
import { ReviewsModule } from './reviews/reviews.module';
import { PaymentsModule } from './payments/payments.module';
import { ItinerariesModule } from './itineraries/itineraries.module';
import { PostsModule } from './posts/posts.module';
import { NotificationsModule } from './notifications/notifications.module';
import { UploadsModule } from './uploads/uploads.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI as string),
    ScheduleModule.forRoot(),
    CommonModule,
    AuthModule, UsersModule, AdminModule,
    AirlinesModule, FlightsModule, FlightBookingsModule,
    HotelsModule, HotelBookingsModule, ReviewsModule,
    PaymentsModule, ItinerariesModule, PostsModule,
    NotificationsModule, UploadsModule,
  ],
})
export class AppModule {}