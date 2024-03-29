export default async function codeFn(username, code) {
    return await `

    <!DOCTYPE html>
    <html lang="en">
       <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap");*{margin: 0; padding: 0; font-family: "Poppins", sans-serif; max-width: 100%;}body{background-color: #171717;}.newheader{top: 0; position: -webkit-sticky; position: sticky; z-index: 10000; background: #ffd523; color: #2c2e43 !important; max-width: 100%; padding: 1em; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -ms-flex-align: center; align-items: center;}.newheader h3{margin-left: 0.5em; color: #2c2e43 !important; font-size: 1em;}.newheader span{min-width: 10%; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: space-evenly; -ms-flex-pack: space-evenly; justify-content: space-evenly; -webkit-box-align: center; -ms-flex-align: center; align-items: center; font-size: 1.5em;}.newheader span .btn{background: red;}.newheader span .copy{background: #0a1931; padding: 0.6em; border-radius: 0.5em; color: #fff; border: none; cursor: pointer; outline: none; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -ms-flex-align: center; align-items: center;}.newheader span .copy i{color: #fff !important;}.newheader span i{margin-left: 1em; color: #2c2e43 !important;}.newheader span .btn{background: #0a1931; font-size: 0.6em; font-weight: 600; padding: 0.5em 1em;}.newheader span .btn i{color: whitesmoke !important;}.wrapper{position: relative; margin-top: 10em; padding: 1em; min-height: 100vh; max-width: 100% !important; background: #171717; color: whitesmoke;}.wrapper p{max-width: 100vw !important; word-wrap: break-word;}.wrapper p a{color: #41e033; text-decoration: none;}.wrapper p a::after{content: " ↥";}::-webkit-scrollbar{background: #171717; padding: 10em; width: 10px;}::-webkit-scrollbar-thumb{margin: 2em; background: #ffd523; border-radius: 0.5em;}</style>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/autosize.js/5.0.0/autosize.min.js"></script> 
          <title>${username}</title>
          <meta name="description" content="${username}">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.5.0/font/bootstrap-icons.min.css"/>
          <script language="javascript" type="text/javascript" src="/static/js/codemirror-5.62.0/lib/codemirror.js"></script> 
          <link rel="stylesheet" type="text/css" href="/static/js/codemirror-5.62.0/lib/codemirror.css">
          </link> 
          <link rel="icon" href="https://img.icons8.com/emoji/48/000000/flower-playing-cards.png"/>
       </head>
       <body >
          <header class="newheader">
             <span>
                <i class="bi bi-back" style="color: black;"></i>
                <h3>${username}</h3>
             </span>
             <span> <button class="copy" id="copyText"  style="margin-right: 10px;">Copy<i class="bi bi-clipboard"></i> </button> <a href="/"><i class="bi bi-house-fill"></i></span></a> 
          </header>
          <div class="wrapper">
             <pre class="codeheader" id="code">${code}</pre>
          </div>
          <script>
            document.getElementById("copyText").addEventListener("click", function() {
                var textArea = document.createElement("textarea");
                textArea.value = document.getElementById("code").textContent;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("copy");
                textArea.remove();
                window.alert("Copied the text !");
            });
          </script>
       </body>
    </html>`
}