
        /*
        every `async` function:
            1) can use `await` in the function`s body
            2) returns promise 
                - IF WE RETURN VALUE - IT IS PASSED TO RESOLVE
                - IF WE THROW AN ERROR - IT IS PASSED TO REJECT
                - ELSE - it is Promise<void>
        __________________________________
        every promise call with `await` prefix in a `try` block:
            1) if the promise is resolved - the parameter that is passed to the `then` statment is assigned
            2) if the promise is rejected - the parameter that is passed to the `catch` statment is assigned to the err in the `catch` block
        */

        function getPromise(num) {
            return new Promise(
                (resolve, reject) => {
                    (num == 4) ? resolve("OK"): reject("NOT OK");
                });
        }

        /***PROMISE-WAY**/
       function v1(num) {
        let p=getPromise(num);
        p
            .then((myMsg) => {console.log(`v1 (${num}): ${myMsg}`) })
            .catch((myErr) => { console.log(`v1 (${num}): ${myErr}`)})
        }

       
        /***ASYNC-AWAIT-WAY**/
        async function v2(num) {
            try {
                let myMsg = await getPromise(num);
                console.log(`v2 (${num}): ${myMsg}`)
            } catch (myErr) {
                console.log(`v2 (${num}): ${myErr}`)
            }
        }


        v1(1);
        v1(4);
        v2(1);
        v2(4);

        /*
        OUTPUT:
        _____________________
        v1 (4): NOT OK
        v1 (1): OK
        v2 (1): NOT OK
        v2 (4): OK
        */
