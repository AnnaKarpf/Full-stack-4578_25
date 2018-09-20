setTimeout(
    ()=>{
        console.log("5 sec past (for Benjamin)");

        setTimeout(
            ()=>{
                console.log("2 sec past (for Benjamin)");
                setTimeout(
                    ()=>{
                        console.log("3 sec past (for Benjamin)");
                        
                    }
                ,3000
                );
            }
        ,2000
        );
    }
,5000
);