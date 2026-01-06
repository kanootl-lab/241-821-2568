/*
let firstname = "John doe";
const idcard = '123';
console.log('Hello, '+ firstName + "!");
let age = 30;
let height = 5.9;
let isStudent = false;

firstname = 'test';
console.log('My name is', firstname, 'and I am', age, 'years old.');
*/

/*
+ บวก
- ลบ
* คูณ
/ หาร
% หารเอาเศษ mod
*/

/*
let number1 = 5;
let number2 = 3;

let result = number1 + number2;
console.log("ผลบวก =", result);
*/


// Conditional
/*
let score = prompt("ป้อนคะแนนของคุณ")
console.log("คะแนนของคุณ " + score)
*/
/*
let Conditional1 = number1 == number2;
console.log("result of condition is:", Conditional1);
*/
// if - else condition

/*
let score = 75;
>=80 เกรดA
>=70 เกรดb
>=60 เกรดc
>=50 เกรดd
<50  เกรดf
if (score >= 80) {
    console.log('เกรดA');
} else if(score >= 70){
    console.log('เกรดB');
}else if(score >=60){
    console.log('เกรดC');
}else if(score >= 50){
    console.log('เกรดD');
}else{
    console.log('เกรดF');
}

/*
let number1 = 5
let number2 = 10
// true && flase
&& และ
|| หรือ
! not ไม่
let number1 = 5
let number2 = 10
    let condition = !(number1 >= 3 || number2 >= 5);
console.log("condition:", condition);

let age = 30;
let gender = "ชาย";

// 
if (age >= 20 && gender == "ชาย"){
    console.log("ผู้ชายที่มีอายุ 20 ปีขึ้นไป");
}
*/

/*
let number = 20

if (number % 2 !=0 ){
    console.log("เป็นเลขคู่")
}
*/

/**let counter = -5;
while(counter < 10){
    console.log('Hello World');
    counter = counter + 1;
}

for(let i=0; i<10; i++){
    console.log('Hello World from for loop');
}
/**
 array
 */
/** 
let age1=25;
let age2=30;
let age3=33;
console.log(age1,age2,age3)

let age=[25,30,33];
console.log(age);
console.log(age[1]);
//แทนที่ค่า
age = [40,45,50];
console.log(age);

//ต่อarray
age.push(55)
console.log(age.length);

//ลบตัวสุดท้าย
age.pop();
console.log(age);

if(age.includes(45)){
    console.log("พบ45ในอาเรย์");
}

let number =[90,60,80,40,50];
number.sort();
console.log(number);

let names=["john","jane","doe"];
names.push("smith");
console.log(names);
console.log(names.length);

for(let i=0;i<names.length;i++);{
    console.log(names[i])
}
    */
/**
 object
 */
/** 
let student =[{
    age:20,
    names:"emma",
    grade:'A'
},{
    age:22,
    names:"liam",
    grade:'B'
}];

for(leti=0;i<student.length;i++){
    console.log("Name"+student[i].names);
    console.log("Age"+student[i].age);
    console.log("Garde"+student[i].grade);
}
console.log(student);
console.log(student.names);
*/
/**
 ฟังชัน
 */
/** 
function Caloulate_garde(score){
    if(score>=90){
        garde='A';
    }else if(score>=80){
        garde='B';
    }else if(score>=70){
        garde='C';
    }else if(score>=60){
        garde='D';
    }else{
        garde='F'
    }
    return garde;
}
//
let student_score=85;
let student_grade=Caloulate_garde(student_score);
console.log("Student's grade is:"+ student_grade);
*/
/** 
let score =[10,20,30,40,50];

for(let i=0; i<score.length;i++){
    console.log('Score at index ${i} is ${score[i]}');
}
    */
   /** 
score = score.map((s) => {
    return s*2
})
score.forEach((s) => {
    console.log('score',s)
})
    */
/**  let Score =[10,20,30,40,50];
   let newScore=[];
   for(let index=0;index<Score.length;index++){
    console.log('score',Score[index])
    if (Score[index]>=30){
        newScore.push(Score[index])
    }
   }
   console.log('newscore:',newScore)
   newScore.forEach((ns)=>{
    console.log('nemscore:',ns)
   })
    */
   let students =[
    {
    age:20,
    names:"aa",
    grade:'A'
},
{
    age:22,
    names:"bb",
    grade:'B'
}
]
console.log('student:',students[0])

let student=students.find((s)=>{
    if(s.names=='bb'){
        return true
    }
})

let doublescore_student=student.map((s)=>{
    s.score=s.score*2
    return s
})

console.log(doublescore_student)

let higtscore_student=students.filter((s)=>{
    if(s.score>=110){
        return true
    }
})
console.log('higtscore_student',higtscore_student)