// Singleton Object
//const tinderUser = new Object()
// Non Singleton Object
const tinderUser = {}

tinderUser.id =  "123abc"
tinderUser.name = "jndffe"
tinderUser.isLoggedIn  = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmailcom",
    fullname: {
        userfullname: {
            firstname: "Sahil",
            lastname: "Kumar"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

