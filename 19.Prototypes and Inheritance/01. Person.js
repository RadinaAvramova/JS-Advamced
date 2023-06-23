function createPerson(firstName, lastName) {
    let person = {
        firstName,
        lastName,
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        set fullName(val) {
            let parts = val.split(' ');
            this.firstName = parts[0];
            this.lastName = parts[1];

        }
    }

    return person;
}