const findTheOldest = function(people) {
    let oldestAge = -Infinity;
    let oldestPerson = null;

    for (let person of people) {
        const { name, yearOfBirth, yearOfDeath } = person;

        // Calculate age based on yearOfDeath if available, otherwise use current year
        const currentYear = new Date().getFullYear();
        const age = yearOfDeath ? (yearOfDeath - yearOfBirth) : (currentYear - yearOfBirth);

        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }
    }

    return oldestPerson;
};


// Do not edit below this line
module.exports = findTheOldest;
