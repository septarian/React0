
function Usuario(name) {
    this.id = Math.random()
    this.name = name
}


let user = new Usuario('Johnny')
let user2 = new Usuario('Gyro')
console.log(user, user2)