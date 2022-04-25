import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    school : string;

    @Column({
        unique : true
    })
    email : string;

    @Column()
    rollNumber : number;
    
}
