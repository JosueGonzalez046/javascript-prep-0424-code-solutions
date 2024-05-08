const person = {
  firstName: 'Josue',
  lastName: 'Gonzalez',
  hobby: 'fishing',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('the persons name is:', fullName + '');

person.job = 'ship';
console.log('the persons current job is: ' + person.job + ' ');

person['previousJob'] = 'warehouse';
console.log('the persons previous job is: ' + person['previousJob'] + '');

console.log('the completed person object: ', person);
