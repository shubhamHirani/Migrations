import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    employeeId : number;

    @Column({
        unique : true
    })
    email : string;

    @Column()
    specifications: string;
    
}
