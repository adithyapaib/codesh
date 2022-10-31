let color = "#" + Math.random().toString(16).substring(2, 8).toUpperCase();
const a = `
<!DOCTYPE html>
<html lang="en">

<head>
    <script>(async function () { let con = await fetch("/user/adi"); })();</script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
    <script>
        /* (async function () {
            let con = await fetch("/user/test");
            let data = await con.json();
            console.log("Test connection " + data);
        }
        )(); */
    </script>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#5C7AEA">
    <link rel="icon" href="https://img.icons8.com/emoji/48/000000/red-paper-lantern-emoji.png" />
    <meta name="description" content="A Textspace for all your content and link for clubhouse." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <title>CodeSH 🔹| A textSpace for your links</title>
</head>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

    body {
        background-color: #1e1e1e;
        color: #fff;
        font-family: 'Poppins', sans-serif;
    }

    .container {
        margin: 1em;
        max-width: 100%;
        height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #EEEEEE;
        border-radius: 3em;

    }

    .container .leftWrapper {
        width: 50%;
        height: 75%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #1e1e1e;
        color: #000000;
        border-radius: 0em 3em 3em 0em;

    }

    .container .leftWrapper h2 {
        font-family: 'Staatliches', cursive;
        font-size: 3em;
        color: #ffffff;
        margin: 0;
        padding: 0;
        letter-spacing: 1px;
    }

    .container .leftWrapper .spand {
        font-size: 1em;
        width: 80%;
        display: flex;
        justify-content: space-evenly;

    }

    .container .leftWrapper .spand .btn {
        background: black;
        color: white;
    }

    #btn {
        padding: 0.8em;
        border-radius: 0.5em;
        font-weight: 500;
        font-family: 'Staatliches', cursive;
        font-size: 1.3em;
        cursor: pointer;

    }


    .container .rightWrapper {
        padding-left: 10vh;
        padding-top: 5vh;
        width: 50%;
        display: flex;
        justify-content: start;
        align-items: stretch;
        flex-direction: column;
        background: #EEEEEE;

        color: #000000;
        border-radius: 3rem;

    }

    #card {
        background-color: #000000;
        box-shadow: 2px 2px 5px #1100001e, -2px -2px 5px #ffffff;
        padding: 0.5rem 1.5rem;
        margin: 2rem;
        border-radius: 1rem;


    }

    .container .rightWrapper h1 {
        margin-left: 2.25rem;

    }

    .container .rightWrapper pre {
        color: #ffffff;

    }

    .container .rightWrapper a {
        text-decoration: none;
        color: #F0A500;
        font-size: 1em;
        font-weight: 500;


    }

    footer {
        width: 100%;
        height: 2rem;
        background-color: #1e1e1e;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    footer a {
        color: rgb(0, 255, 102);
        text-decoration: none;
    }

    @media screen and (max-width: 1300px) {
        .container {
            position: relative;
            border-radius: 0;
            min-height: 300%;
            height: 300%;
            flex-wrap: wrap;
        }

        .container .leftWrapper {
            width: 100%;
            height: 90vh;
            border-radius: 0;
            position: relative;
        }

        .container .rightWrapper {
            width: 100%;
            border-radius: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 1.5em;
            position: relative;
        }

        .container .rightWrapper h1 {
            margin-left: 0rem;
        }

        .container .leftWrapper .spand {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
        }

        footer {
            margin-top: 2em;
            position: relative;

        }
    }
</style>

<body>
    <div class="container">
        <div class="leftWrapper">
            <h2>Get the shortest link for your Code !</h2> <br>
            <span style="margin-top: 2em;" class="spand"><a class="btn" id="btn">Custom paste<i
                        class="bi bi-plus-square"></i></a>
                <a class="randBtn" id="btn" style="background: #F0A500" ; color: #000000; ; cursor: pointer;>Random
                    paste<i class="bi bi-plus-square"></i></a> </span>
        </div>
        <div class="rightWrapper">
            <h1>Latest Paste's</h1>
            <div class="cardContainer">
            </div>
        </div>
    </div>
    <footer>
        <section> Version 7.0.0 <br> Site by <a href="http://adithyapai.com" target="_blank"
                rel="noopener noreferrer">Adtihya Pai B 👀</a></section>
    </footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>document.querySelector(".btn").addEventListener("click", async function () { let a = prompt("Enter a id for your space"); if (a = (a = a.trim()).replaceAll(" ", ""), new RegExp(/^[a-zA-Z0-9 ]*$/).test(a)) { let b = await fetch("/user/" + a); console.log(b), (b = await b.json()) ? alert("The user space already exists ") : window.location.href = "/new/" + a } else alert("Only alphabets and numbers allowed !!") }); </script>
    <script>
        let randBtn = document.querySelector(".randBtn");
        randBtn.addEventListener("click", async function () {
            let userId = Math.random().toString(36).substring(7);
            userId ? window.location.href = "/new/" + userId : null;
        });

        let getHTMLTemplate = async()=>{
            f = await fetch("/latest");
            f = await f.text();
            // render the html in f
            document.querySelector(".cardContainer").innerHTML = f;
        }
       getHTMLTemplate();
    </script>
</body>

</html>
`

export default require('express')().get('/',(req, res)=> res.status(200).send(a).end())
