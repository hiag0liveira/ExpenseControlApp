import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExchangeRate {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    date: string;

    @Column({ type: 'float' })
    rate: number;

    @Column({ type: 'varchar', length: 3 })
    currency: string;
}
