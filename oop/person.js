class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes

    }
    getBio() {
        let bio = `${this.firstName} ${this.lastName} is ${this.age} years old.`
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }

    set fullName(name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getYearsLeft() {
        return (65 - this.age)
    }

    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes = []) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }

    updateGrade(change) {
        this.grade += change
    }

    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.fullName} is ${status} the class`
    }
}

const me = new Student('Andrew', 'Mead', 32, 71, ['YT'])
me.fullName = 'Clancey Turner'
console.log(me.getBio())