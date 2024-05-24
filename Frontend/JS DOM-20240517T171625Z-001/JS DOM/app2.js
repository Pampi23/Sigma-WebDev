
class Student{
    constructor(name,age,marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    talk(){
        console.log(this.name);
    }
}
let stu1 = new Student("Adam",25,95)
