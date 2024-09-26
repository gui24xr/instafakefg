import axios from 'axios'

const usersArray = [
    { userName: "user1", password: "123456", name: "John", lastName: "Doe", age: 25 },
    { userName: "user2", password: "123456", name: "Jane", lastName: "Smith", age: 30 },
    { userName: "user3", password: "123456", name: "Alice", lastName: "Johnson", age: 22 },
    { userName: "user4", password: "123456", name: "Bob", lastName: "Brown", age: 28 },
    { userName: "user5", password: "123456", name: "Charlie", lastName: "Davis", age: 35 },
    { userName: "user6", password: "123456", name: "David", lastName: "Garcia", age: 26 },
    { userName: "user7", password: "123456", name: "Eve", lastName: "Martinez", age: 29 },
    { userName: "user8", password: "123456", name: "Frank", lastName: "Lopez", age: 31 },
    { userName: "user9", password: "123456", name: "Grace", lastName: "Wilson", age: 27 },
    { userName: "user10", password: "123456", name: "Hank", lastName: "Anderson", age: 24 },
];

//console.log(users);


async function crearUser( {userName, password, name, lastName, age} ){
    await axios.post('http://localhost:8080/api/users',{ 
        userName, 
        password, 
        name, 
        lastName, 
        age 
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);

      });
    

}

for (let item of usersArray){
    await crearUser(item)
}

