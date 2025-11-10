import { Module } from '@nestjs/common'
import { DatabaseModule } from './database/database.module'
import { SupplierModule } from './supplier/supplier.module';
import { MaterialModule } from './material/material.module';

@Module({
  imports: [DatabaseModule, SupplierModule, MaterialModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
