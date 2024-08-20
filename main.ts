// // =============================Enum==================================

// // An enum is a special class that represent a group of constant
// //  (enchangeable variable)

// // Numeric enums in Typesscript 
// // string enums in Typesscript 
// // Heterogeneous enum (both string & number ) in Typescript

// enum offie {
//     admin , staff, maintaince , security , empolyes 
// }
// console.log(offie);


// // Example 

// enum student{
//     Bilal , Hakeem , Faraz , Imran , Aamir  
// }
// const studentName :student= student['Hakeem']

// console.log(studentName);




// // Example function

// enum friens {
//     Zeeshan = "bus man" , Mehake = "teacher " , Javeed = "washman" , Shakeel = "driver"

// }

// function print (b:string){
//     return b
// }

// console.log(print(friens.Mehake));



// // Numeric enums in Typesscript


// enum Status {
    
//     Teacher =1,
//     Students , 
//     Guest,
// }

// console.log(Status.Teacher);   // Output: 1
// console.log(Status.Students);  // Output: 2
// console.log(Status.Guest);  // Output: 3



// enum AccessLevel {
//     Guest = 1,
//     User = 2,
//     Admin = 4,
//     SuperAdmin = 8
// }

// console.log(AccessLevel.Guest);      // Output: 1
// console.log(AccessLevel.User);       // Output: 2
// console.log(AccessLevel.Admin);      // Output: 4
// console.log(AccessLevel.SuperAdmin); // Output: 8

// enum Days {
//     // Sunday ,
//     Sunday,
//     Monday ,
//     Tuesday ,
//     Wednesday ,
//     Thursday ,
//     Friday ,
//     Saturday 
// }



// let day: string = Days[Days.Sunday]; // "sunday"
// console.log(day);                       // Output: "sunday "




// =======================sir zia repo  Enum ===============================      




enum bestFriends  {Ali, Naveed, Bilal };//starts with 0
let  bf: bestFriends = bestFriends.Naveed;
console.log(bestFriends);

enum collagefriends  { Alina = 1, mehake , saba };
let  cName: string = collagefriends[2];
console.log(cName);

enum facebook  {login = 1, logout = 2, online = 4};//can assign values to all
let  fbIndex = facebook["online"];
console.log(fbIndex);



