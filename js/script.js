function User(firstName, lastName, age, gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
}


User.prototype.emailDomain = '@facebook.com';
User.prototype.getEmailAddress = function(){return this.firstName + this.lastName + this.emailDomain};
var user1 = new User("Joren", "Broekema", 24, "male");

console.log(user1);
console.log(user1.emailDomain);
console.log(user1.getEmailAddress());