import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Role } from "./Role";
import { User } from "./User";

@Entity()
export class UserRole {

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, user => user.userRole)
    user!: User;

    @ManyToOne(() => Role, role => role.userRole)
    role!: Role;

    @Column()
    createdAt: Date;

    @Column()
    createdBy: string;

    @Column()
    updatedAt: Date;

    @Column()
    updatedBy: string;

}
