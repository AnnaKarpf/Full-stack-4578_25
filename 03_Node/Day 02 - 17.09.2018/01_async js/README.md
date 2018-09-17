# java script -ONE THREADED LANGUAGE
js in the browser has the following cases that are running in async mode:
* setTimeout / setInterval
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
   <script>
       console.log("before setTimeout");
       setTimeout(()=>{console.log("in setTimeout")},7000);
       console.log("after setTimeout");

       /*
       OUTPUT:
       ___________________
        before setTimeout
        after setTimeout
        in setTimeout
       */
   </script>
</head>
<body>
    
</body>
</html>
```
* Event listeners
```javascript
<!DOCTYPE html>
<html lang="en">

<head>

</head>

<body>
    <button id="btn">click me</button>

    <script>

        document.getElementById("btn").addEventListener("click",
            () => { console.log("someone clicked the button") });

        console.log("The EventListener was added - waiting for click"); 
    </script>
</body>

</html>
```
* Ajax
```javascript
<!DOCTYPE html>
<html lang="en">

<head>

    <script>
        console.log("Before ajax request");

        var req = new XMLHttpRequest();
        req.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
        req.onreadystatechange = () => {
            if (req.readyState == 4)
                console.log("Response: " + req.response);
        }
        req.send();

        console.log("After ajax request"); 


        /*
        OUTPUT:
        __________________________
            Before ajax request
            After ajax request
            Response: {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            }
        */
    </script>
</head>

<body></body>

</html>
```


# Event loop live demo:
http://latentflip.com/loupe/

