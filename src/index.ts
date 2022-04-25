import "reflect-metadata";
import {createConnection} from "typeorm";
import {Student} from "./entity/Student";
import {Employee} from './entity/Employee'

createConnection().then(async connection => {

    //Enter Student details
    console.log("Inserting a new student into the database...");
    const student = new Student();
    student.firstName = "shubham";
    student.lastName = "hirani";
    student.age = 25;
    student.email = "shubhamhirani@gmail.com"
    student.rollNumber = 12
    student.school = "tapovan vidhyalay"
    await connection.manager.save(student);
    console.log("Saved a new user with id: " + student.id);

    console.log("Loading students from the database...");
    const students = await connection.manager.find(Student);
    console.log("Loaded users: ", students);

    //Enter employee details
    console.log("Inserting a new employee into the database...");
    const employee = new Employee();
    employee.firstName = "shubham";
    employee.lastName = "hirani";
    employee.age = 25;
    employee.email = "shubhamhirani@gmail.com"
    employee.employeeId = 12
    employee.specifications = "python"
    await connection.manager.save(employee);
    console.log("Saved a new user with id: " + employee.id);

    console.log("Loading employee from the database...");
    const employees = await connection.manager.find(Employee);
    console.log("Loaded users: ", employees);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
