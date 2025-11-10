import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Material {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  codigo_sku: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  unit_measure: string

  @Column()
  actual_stock: number

  @Column()
  minimum_stock: number
}
