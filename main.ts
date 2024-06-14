#! /usr/bin/env node

import inquirer from "inquirer"


let name1 = "IT Initiative Program"
console.log(name1)
class student {
    name: string;
    id :number;
    coursesEnrolled:string[];
    feesAmount:number;
 
    constructor( name: string,id:number , coursesEnrolled:string[] , feesAmount:number){
        this.name = name;
        this.id = id; 
        this.coursesEnrolled = coursesEnrolled;
        this.feesAmount = feesAmount; 
    }
}

let coursesEnrollement = true;

let students:student[] = []

while (coursesEnrollement){
const answer1 = await inquirer.prompt([{
    name: "option",
    message: "select option",
    type:"list",
    choices:["enroll student","show status","exit"]

}])

if (answer1.option === "enroll student"){
  let enroll= await inquirer.prompt([
    {
        name : "student",
        type: "input",
        message: "enter your name",
        validate: (value) => {
            if (value.trim() === "") {
              return "PLEASE FILL OUT THIS FIELD";
            }
            return true;
        },
    },
])
let studentCourses= await inquirer.prompt({
    name:"courses",
    message:"select cources to enroll",
    type:"list",
    choices:["Frontend Development","Backend Development","Fullstack Development","Gen AI"]
})
console.log(`${studentCourses.courses} fees is`)
let fees = 0;
switch(studentCourses.courses){
    case "Frontend Development":
    fees = 30000;
    break;
    case "Backend Development":
    fees = 50000;
    break;
    case "Fullstack Development":
    fees = 70000;
    break;
    case "Gen AI":
    fees = 100000 
}
console.log(fees)
let payment =await inquirer.prompt([{
    name:"amount",
    message:"if you want to continue enroll select payment method",
    type:"list",
    choices:["bank account","easy paisa","jazz cash","exit"]
}])
if (payment.amount=="exit"){
    console.log("exit");
    process.exit(0);
 }
 let amountNo =await inquirer.prompt({
    name:"submit",
    type:"number",
    message:"enter amount"
});

let mybalance = amountNo.submit
console.log(`your current balance is ${mybalance}`)

if(amountNo.submit === fees){
    let id = Math.floor(Math.random() * 100000)
    let studentdata = new student(
     enroll.student,
     id,
     studentCourses.courses,
     fees
    )
    students.push(studentdata)
    console.log(enroll.student+ " is enrolled successfully. Your student ID is " + id
      );
}else{
    console.log(`process expired!!! your exact fee is ${fees}`)
}
}else if(answer1.option === "show status")
{let status= await inquirer.prompt({
    name : "id",
    type :"number",
    message:"enter your id for checking status:"
})
let myStudent = students.find((myStudent)=> myStudent.id === status.id)
if(myStudent){
    console.log("showing status......")
    console.log(students)
}else{
    console.log("id not found")
}

}else if (answer1.option === "exit"){
    console.log("exit")
    process.exit(0)
}

}
