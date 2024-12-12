function createUser(name) {
    id = Math.random();

    return {id, name};
}

let user = createUser('Johnny');
let user2 = createUser('Gyro');
console.log(user, user2)