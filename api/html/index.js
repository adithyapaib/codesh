
/* generate random color wiht #*/
let color = "#" + Math.random().toString(16).substring(2, 8).toUpperCase();
const a = `
<!DOCTYPE html>
<html lang="en">
<head>
    <script>(async function () { let con = await fetch("/user/adi"); })();</script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
    <style>
        @import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,800;0,900;1,600;1,700;1,800&family=Poppins:wght@300;400;500;600;700;800;900&display=swap);

        * {
            margin: 0;
            padding: 0;
            color: #fff;
            font-family: Montserrat, sans-serif
        }

        body {
            max-width: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background: #171717
        }

        .container {
            width: 100%;
            height: 90vh;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background: #171717
        }

        .container .top {
            height: 70%;
            width: 60%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            z-index: 1000;
            background: rgba(0, 0, 0, .65);
            -webkit-box-shadow: 0 8px 32px 0 #4c51a05e;
            box-shadow: 0 8px 32px 0 #4c51a05e;
            backdrop-filter: blur(15.5px);
            -webkit-backdrop-filter: blur(15.5px);
            border-radius: 10px;
            border: 1px solid #0000002e
        }

        .container h2 {
            font-weight: 800 bold
        }

        .container .wave {
            position: absolute;
            bottom: 0;
            z-index: 1;
            height: 50vh;
            max-width: 100%;
            overflow-x: hidden
        }

        .container #btn {
            text-decoration: none;
            background: #fff;
            color: #2c2e43;
            padding: .75em 1.5em;
            margin-top: 3em;
            border-radius: 3px;
            font-weight: 600
        }

        .container #btn i {
            color: #171717;
            font-size: 1em;
            margin-left: .5em;
            background: 0 0
        }

        ::-webkit-scrollbar-thumb {
            background-color: #2c2e43;
            border-radius: 10px
        }

        ::-webkit-scrollbar {
            width: 10px;
            background-color: #5c7aea
        }
        span{
           padding: 3em;
           z-index: 1000;
        }
        footer{
            z-index: 1000;
            text-align: center;
            
        }
        footer section{
            font-size: 1em;
            line-height: 2em;
            text-align: center;
        }
        footer section a {
            color: #5c7aea;
            outline: none;
            text-decoration: none;
            text-align: center;
        }

        @media screen and (max-width:768px) {
            .container .top {
                width: 90%;
                padding: 1em;
                word-wrap: break-word;
                text-align: center;
            }
            .container .top .spand 
            {
                font-size: 0.8em;
                display: flex;
                justify-content: space-between;
            align-items: center;            }
        }
        .container .top .spand #btn {
            margin: 1em;
            
        }
    </style>
    <script>
    (async function () {
        let con = await fetch("/user/test");
        let data = await con.json();
        console.log("Test connection " + data);
    }
    )();
    </script>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#5C7AEA">
    <link rel="icon" href="https://img.icons8.com/emoji/50/000000/flower-playing-cards.png" />
    <meta name="description" content="A Textspace for all your content and link for clubhouse." />
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.5.0/font/bootstrap-icons.min.css"
        integrity="sha512-xnP2tOaCJnzp2d2IqKFcxuOiVCbuessxM6wuiolT9eeEJCyy0Vhcwa4zQvdrZNVqlqaxXhHqsSV1Ww7T2jSCUQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <title>codesh  📝| A textSpace for your links</title>
</head>

<body>
    <div class="container">
        <div class="top">
            <h2>Get the shortest link for your Code !</h2>
            <span style="margin-top: 2em;" class="spand"><a class="btn" id="btn">Custom paste<i class="bi bi-plus-square"></i></a>
                <a class="randBtn" id="btn" style="background: #F0A500"; color: #000000; ; cursor: pointer;>Random paste<i
                        class="bi bi-plus-square"></i></a> </span>
        </div>
        <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="wave">
            <defs></defs>
            <path id="feel-the-wave" d="" />
        </svg>
        
        
    </div>
    <footer>
        <section > Version 5.0.0 <br> Site by <a href="http://adithyapai.com" target="_blank" rel="noopener noreferrer">Adtihya Pai B 👀</a></section>
     </footer>
   

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js">
    </script>
    <script src="https://rawgit.com/peacepostman/wavify/master/wavify.js">
    </script>
    <script src="https://rawgit.com/peacepostman/wavify/master/jquery.wavify.js"></script>
    <script>document.querySelector(".btn").addEventListener("click",async function(){let a=prompt("Enter a id for your space");if(a=(a=a.trim()).replaceAll(" ",""),new RegExp(/^[a-zA-Z0-9 ]*$/).test(a)){let b=await fetch("/user/"+a);console.log(b),(b=await b.json())?alert("The user space already exists "):window.location.href="/new/"+a}else alert("Only alphabets and numbers allowed !!")});var wave1=$("#feel-the-wave").wavify({height:80,bones:4,amplitude:60,color:"${color}",speed:.25})</script>
    <script>
        let randBtn = document.querySelector(".randBtn");
        randBtn.addEventListener("click", async function () {
            let userId = Math.random().toString(36).substring(7);
            userId ? window.location.href = "/new/" + userId : null;
        });
    </script>
</body>

</html>`
export default a
