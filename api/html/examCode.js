export default async function examCodeFn(username, code) {
    return await `

    <!DOCTYPE html>
    <html lang="en">
       <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <script src="https://cdnjs.cloudflare.com/ajax/libs/autosize.js/5.0.0/autosize.min.js"></script> 
          <title>${username}</title>
          <meta name="description" content="${username}">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.5.0/font/bootstrap-icons.min.css"/>
          </link> 
          <link rel="icon" href="https://img.icons8.com/emoji/48/000000/flower-playing-cards.png"/>
       </head>
       <body >
       <button id="btn" style="width:80vw;height:30vh;background: #F9F9F9;border:none;" >.</button>
          <div class="wrapper">
             <pre style="font-size: 0.10em; line-height: 2em; color: #F2F2F2;" class="codeheader" id="code">${code}</pre>
          </div>
          <script>
            document.getElementById("btn").('click', function(event) {
               var textArea = document.createElement("textarea");
               textArea.value = document.getElementById("code").textContent;
               document.body.appendChild(textArea);
               textArea.select();
               document.execCommand("copy");
               console.log("Copied the text: " + textArea.value);
               document.body.removeChild(textArea);
                  window.close();
   
            });  
         
          </script>
       </body>
    </html>`
}