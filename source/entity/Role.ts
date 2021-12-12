import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserRole } from "./UserRole";

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    enabled: boolean;

    @Column()
    createdAt: Date;

    @Column()
    createdBy: string;

    @Column()
    updatedAt: Date;

    @Column()
    updatedBy: string;

    @OneToMany(() => UserRole, UserRole => UserRole.role)
    userRole!: UserRole[];
}
