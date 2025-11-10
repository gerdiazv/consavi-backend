import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  companyName: string

  @Column()
  rut: string

  @Column()
  contactName: string

  @Column()
  phoneNumber: string

  @Column()
  email: string

  @Column()
  address: string
}
