import { Module } from '@nestjs/common'
import { DatabaseModule } from './database/database.module'
import { SupplierModule } from './supplier/supplier.module';

@Module({
  imports: [DatabaseModule, SupplierModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
