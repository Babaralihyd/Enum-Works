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
var bestFriends;
(function (bestFriends) {
    bestFriends[bestFriends["Ali"] = 0] = "Ali";
    bestFriends[bestFriends["Naveed"] = 1] = "Naveed";
    bestFriends[bestFriends["Bilal"] = 2] = "Bilal";
})(bestFriends || (bestFriends = {}));
; //starts with 0
var bf = bestFriends.Naveed;
console.log(bestFriends);
var collagefriends;
(function (collagefriends) {
    collagefriends[collagefriends["Alina"] = 1] = "Alina";
    collagefriends[collagefriends["mehake"] = 2] = "mehake";
    collagefriends[collagefriends["saba"] = 3] = "saba";
})(collagefriends || (collagefriends = {}));
;
var cName = collagefriends[2];
console.log(cName);
var facebook;
(function (facebook) {
    facebook[facebook["login"] = 1] = "login";
    facebook[facebook["logout"] = 2] = "logout";
    facebook[facebook["online"] = 4] = "online";
})(facebook || (facebook = {}));
; //can assign values to all
var fbIndex = facebook["online"];
console.log(fbIndex);
