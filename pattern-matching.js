
const cons = ( first, rest ) => [ first, rest ];
const car = ( [ first, rest ] ) => first;
const cdr = ( [ first, rest ] ) => rest;

const oneToFive = cons( 1, cons( 2, cons( 3, cons( 4, cons( 5, null ) ) ) ) );

console.log( car( oneToFive ) );
console.log( cdr( oneToFive ) );

// Extract the 3rd element in the list using car and cdr

const third = car( cdr( cdr( oneToFive ) ) );
console.log( third );