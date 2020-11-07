const personMark = {
    _bmi: 0,
    fullName: "Mark Miller",
    mass: 92,
    height: 1.75,
    get bmi() {
        return this.calcBMI();
    },
    set bmi(newBMI) {
        this._bmi = newBMI;
    },
    calcBMI() {
        this.bmi = this.mass / (this.height * this.height);
        return this._bmi;
    }
}

const personJohn = {
    _bmi: 0,
    fullName: "John Smith",
    mass: 115,
    height: 1.72,
    get bmi() {
        return this.calcBMI();
    },
    set bmi(newBMI) {
        this._bmi = newBMI;
    },
    calcBMI() {
        this.bmi = this.mass / (this.height * this.height);
        return this._bmi;
    }
}

if (personJohn.bmi > personMark.bmi) {
    console.log(`${personJohn.fullName}'s BMI (${personJohn.bmi}) is higher than ${personMark.fullName}'s (${personMark.bmi})!`);
} else {
    console.log(`${personMark.fullName}'s BMI (${personMark.bmi}) is higher than ${personJohn.fullName}'s (${personJohn.bmi})!`);
}