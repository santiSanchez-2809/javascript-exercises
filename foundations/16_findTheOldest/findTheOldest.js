const findTheOldest = function(people) {
    return people.reduce((currentPerson, oldestPerson) => 
        age(currentPerson) > age(oldestPerson)? currentPerson
        : oldestPerson
        , {yearOfBirth: 0, yearOfDeath: 0});
};

function age(person){
    let age = "yearOfDeath" in person
    ? person.yearOfDeath - person.yearOfBirth
    : new Date().getFullYear() - person.yearOfBirth;
    
    return age;
}

// Do not edit below this line
module.exports = findTheOldest;
