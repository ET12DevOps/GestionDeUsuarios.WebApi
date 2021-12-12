import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Session } from "./Session";
import { UserRole } from "./UserRole";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    enabled: boolean;

    @OneToMany(() => Session, session => session.user)
    logins: Session[];

    @Column()
    createdAt: Date;

    @Column()
    createdBy: string;

    @Column()
    updatedAt: Date;

    @Column()
    updatedBy: string;

    @OneToMany(() => UserRole, UserRole => UserRole.user)
    userRole!: UserRole[];
}
