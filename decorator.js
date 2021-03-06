// 1. Write a decorator that doesn't allow you to call a function twice. (the function is called once in fp)

function once( fn ) {
    let called = false;
    return function(args) {
        if( called ) {
            console.log("already called");
        } else {
            return fn(args);
            called = true;
        }
    }
}

let balance = 100;

function pay( amount ) {
    balance -= amount;
}

const securePay = once( pay );

securePay( 10 );
securePay( 10 );
securePay( 20 );
securePay( 30 );
securePay( 10 );

console.log( balance );

// 2. Write a throttle function, i.e. a function that allows at most one execution within a fixed timeframe (ex: 100 ms)

function throttle( fn ) {
    let timeOut = false;
    return function(args) {
        if(timeOut == false) {
            timeOut = true;
            setTimeout(function(){
                timeOut= false
                return fn(args);
            },100)
        }
    }
}

function logEvent( ) {
    console.log( "Event has been logged" )
}

const throttledLog = throttle( logEvent );

throttledLog( );
throttledLog( );
throttledLog( );
throttledLog( );
throttledLog( );
setTimeout( throttledLog, 1000 );
setTimeout( throttledLog, 1000 );
setTimeout( throttledLog, 1000 );
setTimeout( throttledLog, 2000 );
setTimeout( throttledLog, 2000 );