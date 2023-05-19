let color = "#" + Math.random().toString(16).substring(2, 8).toUpperCase();
const a = `

<!DOCTYPE html>
<html lang="en">
<head>
    <script>(async function () { let con = await fetch("/user/adi"); })();</script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#5C7AEA">
    <link rel="icon" href="https://img.icons8.com/emoji/48/000000/red-paper-lantern-emoji.png" />
    <meta name="description" content="A Textspace for all your content and link for clubhouse." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <title>CodeSH 🔹| A textSpace for your links</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mortezaom/google-sans-cdn@master/fonts.css" />

</head>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

    body {
        background-color: #fff;
        font-family: "Google Sans", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        height: 100vh;
        align-items: center;
        flex-direction: column;
    }

    .container {
        width: 95%;
        height: 85vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background: #2e3034;
        border-radius: 03em 20em 20em 20em;
        border: #000 5px solid;

    }

    .container .leftWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: none;
        color: #000000;
        border-radius: 0em 3em 3em 0em;


    }

    .container .leftWrapper h2 {
        font-family: 'Staatliches', cursive;
        font-size: 2.5em;
        color: #fff;
        margin: 0;
        padding: 0;
        letter-spacing: 1px;
    }

    .container .leftWrapper .spand {
        font-size: 1em;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    .container .leftWrapper .spand .btn {
        
        background: #fff;
        color: #202124;
        border: 3px solid #000;

    }
    .container .leftWrapper .spand .randBtn {
        background: #428EFF;
        color: black;
        border: 3px solid #000;
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
        padding-top: 5vh;
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: left;
        flex-direction: column;
        color: #000000;
        border-radius: 3rem;
        padding: 2rem;
        border: #000 3px solid;
    }
    .container .rightWrapper h1 {
        font-family: 'Staatliches', cursive;
        color: #fff;
        margin: 0;
        padding: 0;
        letter-spacing: 1px;
        margin-bottom: 2em;
    }

    #card {
        background-color: none;
        padding: 0.3rem 1.2rem;
        /* margin: 2rem; */
        margin: 0 2rem 2rem 0;
        border-radius: 1.3rem;
        background: #428EFF;
        border: #000 3px solid;
    }


    .container .rightWrapper pre {
        color: #000000;
    }

    .container .rightWrapper a {
        text-decoration: none;
        color: #fff;
         font-family: 'Staatliches', cursive;
        font-size: 0.8em;
        font-weight: 500;
    }

    footer {
        width: 100%;
        height: 2rem;
        color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-family: 'Staatliches', cursive;
    }

    footer a {
        color: #428EFF;
        font-family: 'Staatliches', cursive;
        text-decoration: none;
    }

    @media screen and (max-width: 900px) {
        /* .container {
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

        } */
        body{
            margin: 0;
            padding: 0;

            max-width: 100% !important;
            min-height: 150vh;
            background: #2e3034;

        }
        .container{
            border: none;
            border-radius: 0;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            padding: 0;
            margin: 0;
            width: 95%;

        }
        .container .leftWrapper {
            margin: 0;
            padding: 0;
            position: relative;
            height: max-content;
            border-radius: 0;
            width: 90% !important;
            
        }
        .container .leftWrapper h2 {
            font-size: 1.5em;
            width: 100%;
            text-align: center;
        }

        .container .leftWrapper .spand {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
        }

        .container .leftWrapper .spand .btn {
            width: 40%;
            padding: 0.8em;
            border-radius: 0.5em;
            font-weight: 500;
            font-family: 'Staatliches', cursive;
            font-size: 1em;
            cursor: pointer;
        }

        .container .leftWrapper .spand .randBtn {
            width: 40%;

            border-radius: 0.5em;
            font-weight: 500;
            font-family: 'Staatliches', cursive;
            font-size: 0.8em;
            cursor: pointer;
        }

        .container .rightWrapper {
            margin: 0;
            padding: 0;
            width: 90%;
            border-radius: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top: 6em;
            position: relative;
            padding-top: 2em;
            width: 90% !important;
            margin-bottom: 0;

        }
        #card{
            width: 85%;
        }

        footer {
            position: relative;
            color: #fff;

        }

       
    }

    @media screen and (max-width: 1366px) {
        .container .rightWrapper {
            width: 30%;
        }

        .container .leftWrapper{
            width: 30%;
        }
        .container .rightWrapper h1 {
            font-size: 1.5em;
        }
        .container .rightWrapper a {
            font-size: 0.8em;
        }

    }
</style>

<body>
    <div class="container">
        <div class="leftWrapper">
            <h2>Get the shortest link for your Code !</h2> <br>
            <span style="margin-top: 2em;" class="spand"><a class="btn" id="btn">Custom paste<i
                        class="bi bi-plus-square"></i></a>
                <a class="randBtn" id="btn" >Random
                    paste<i class="bi bi-plus-square"></i></a> </span>
        </div>
        <div class="rightWrapper">
            <h1>Recents</h1>
            <div class="cardContainer">
            </div>
        </div>
    </div>
    <footer>
        <section> Version 9.0.0 <br> Site by <a href="http://adithyapai.com" target="_blank"
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
            f = await fetch("https://codesh.cf/latest");
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
