// السؤال الأول

const name = "لجين";

let age = 16;
console.log("انا " + name + " " + "وعمري" + age);

let five_times_age = 5 * age;
console.log(five_times_age);

age *= 5;
console.log(age);

// 1

// 2

// 3 and 4

// 5 and 6

// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// السؤال الثاني
// 1
let hobies = ["القراءة", "السباحة", "البرمجة"];

// 2
hobbies.push(16);
hobbies[4] = 16;
console.log(hobbies);

console.log(hobbies.length);
// 3
hobbies.pop()
console.log(hobbies)

// 4
let student={
    track:"مسار الويب"
    language:"JavaScript"
}

// 5
student["TAs"]=["نانسي","موضي","حسين","رهف"]
console.log(student)

// 6
console.log(student["track"])
console.log(student.track)

// 7
console.log(student["TAs"][0])


// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// البونص
// 1
student["sayHello"] = function( ) {console.log("مرحبا")}
console.log(student)

// 2
student["sayHello"]()
// console results => console.png
