const user = {
    name: 'Victor',
    lastName: 'Oliveira Bittencourt'
}

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores:', Object.defineProperties(user));

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Victor Oliveira Bittencourt'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 22}));

// Previne todas as alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações:', newObj);

// Permiteapenas a alteração de propriedades existentes em um objeto
const person = {name: 'Victor'};
Object.seal(person);

person.name = 'Victor Bittencourt';
delete person.name;
person.agr = 26;

console.log('\nVariável person após as alterações:', person);