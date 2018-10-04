
//argv = argument vector 
//(contains an array of all arguments that we sent in the run command)
// firat element - contains the path to node exe
// second element contains the path of the running app
// third element will contain the extra arg (if we sent it)
console.log(process.argv);


/*

        RUNNING COMMAND         |           RESULT
____________________________________________________________

        node app                |  [ 'C:\\Program Files\\nodejs\\node.exe','C:\\00_read args\\app' ]
____________________________________________________________

        node app hello          |  [ 'C:\\Program Files\\nodejs\\node.exe','C:\\00_read args\\app' , 'hello']
____________________________________________________________

        node app hello world    |  [ 'C:\\Program Files\\nodejs\\node.exe','C:\\00_read args\\app' , 'hello' , 'world']
*/