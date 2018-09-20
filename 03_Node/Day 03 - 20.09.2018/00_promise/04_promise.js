new Promise((resolve, reject) => {
        setTimeout(
            () => {
                resolve("5 sec past (for Benjamin)");
            }, 5000
        )
    })
    .then(
        (msg) => {
            console.log(msg)
            return new Promise((resolve, reject) => {
                setTimeout(
                    () => {
                        resolve("2 sec past (for Benjamin)");
                    }, 2000
                )
            })

        }
    )
    .then(
        (msg) => {
            console.log(msg)
            return new Promise((resolve, reject) => {
                setTimeout(
                    () => {
                        resolve("3 sec past (for Benjamin)");
                    }, 3000
                )
            })

        }
    )
    .then(
        (msg) => {console.log(msg)}
    );