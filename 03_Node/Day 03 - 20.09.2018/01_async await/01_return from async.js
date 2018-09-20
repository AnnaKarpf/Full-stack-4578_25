
        /*
        Every function with async decleration:
             1) can use `await` keyword
             2) the returned value is sent as resolve of a promise
        */
        async function sub(n1, n2) {
            if (n1 == n2)
                throw new Error("can not be the same");  //this is reject promise
            return n1 - n2;  //this is resolve promise
        }


        sub(4, 1)
        .then( msg => console.log(`sub(4, 1) :${msg}`))
        .catch(err => console.log(`sub(4, 1) :${err}`));

       sub(4, 4)
        .then( msg => console.log(`sub(4, 4) :${msg}`))
        .catch(err => console.log(`sub(4, 4) :${err}`));


        /*
        OUTPUT:
        ___________________________
        sub(4, 1) :3
        sub(4, 4) :Error: can not be the same
        */