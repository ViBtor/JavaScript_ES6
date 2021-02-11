const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbol são únicos
console.log('symbol é igual a symbol2:', symbol1 === symbol2);

// Prevenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol]: 'Victor',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Olibeira Bittencourt'
}

console.log(user);

// Symbols criam propriedades que não são enumerables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log('\nValor da chave ${key}: ${user[key]}');
    }
}

console.log('Propriedades do objeto user:', Object.keys(user));
console.log('Valores das propriedades do objeto user:', Object.values(user));

// Exibir symbols de um objeto
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user));

// Acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user:', Reflect.ownKeys(user));

// Criar um enum
const disrections = {
    UP   : Symbol( 'UP' ),
    DOWN : Symbol( 'DOWN' ),
    LEFT : Symbol( 'LEFT' ),
    RIGHT: Symbol( 'RIGHT' )
};