let user = {
    name: 'Victor'
};

// Alterando a propriedade de um objeto
console.log(user);

user.name = 'Outro nome 1';
console.log(user);
user['name'] = 'Outro nome 2';

console.log(user);
const prop = 'name';
user[prop] = 'Outro nome 3';

// Criando uma propriedade
user.lastName = 'Oliveira Bittencourt'

console.log(user);
// Deletando uma propriedade
delete user.name;

console.log(user);