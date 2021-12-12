import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Session {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.id)
    user: User;

    @Column()
    jwt: string;

    @Column()
    username: string;

    @Column()
    ipAddress: string;

    @Column()
    browser: string;

    @Column()
    language: string;

    @Column()
    country: string;

    @Column()
    region: string;

    @Column()
    loggedAt: Date;
}
