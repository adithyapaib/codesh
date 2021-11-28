export default async function newFn (username) {
	console.log('Inside newFn' + username);
	return `
	<!DOCTYPE html>
<html lang="en">

<head>
    <meta>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style>
	@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,800;0,900;1,600;1,700;1,800&family=Poppins:wght@300;400;500;600;700;800;900&display=swap);
	* {
		margin: 0;
		padding: 0;
		font-family: Montserrat, sans-serif
	}
	
	body {
		background-color: #171717;
		margin: 0;
		max-width: 100% !important;
		font-family: Poppins, sans-serif
	}
	
	.wrapper {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		padding: 1rem .5rem;
		font-size: 1rem;
		background-color: #171717
	}
	
	#code-display {
		padding-top: 0;
		padding-bottom: 0;
		color: #fff
	}
	
	textarea {
		max-width: 100%;
		width: 100vw;
		background-color: #080808;
		resize: none;
		width: 100%;
		padding: 0;
		margin-left: 1rem;
		color: #fff;
		min-height: calc(100vh - 2rem);
		border: none;
		font-size: 1.5em !important;
		outline: 0;
		font-family: Poppins sans-serif;
	}
	
	.btn {
		cursor: pointer;
		background: 0 0;
		border: 1px solid #002b36;
		color: #002b36;
		border-radius: .25rem;
		padding: .25rem .5rem;
		-webkit-transition: background-color .2s ease-in-out;
		transition: background-color .2s ease-in-out;
		display: inline-block;
		text-decoration: none
	}
	
	.btn:hover {
		background-color: #83e5ff
	}
	
	* {
		color: #fff !important
	}
	
	p {
		margin-left: 1em
	}
	
	.menu {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		padding: 1rem
	}
	
	.newheader {
		top: 0;
		position: -webkit-sticky;
		position: sticky;
		background: #ffd523;
		color: #2c2e43 !important;
		max-width: 100%;
		padding: 1em;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center
	}
	
	.newheader h1 {
		margin-left: .5em;
		color: #2c2e43 !important;
		font-size: 1.5em
	}
	
	.newheader span {
		min-width: 10%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: space-evenly;
		-ms-flex-pack: space-evenly;
		justify-content: space-evenly;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		font-size: 1.5em
	}
	
	.newheader span .btn {
		background: red
	}
	
	.newheader span i {
		margin-left: 1em;
		color: #2c2e43 !important
	}
	
	.newheader span .btn {
		background: #0a1931;
		font-size: .6em;
		font-weight: 600;
		padding: .5em 1em
	}
	
	.newheader span .btn i {
		color: #f5f5f5 !important
	}
	
	.wrapper {
		margin: 0;
		padding: 0
	}
	
	.wrapper .textarea {
		background: #171717;
		font-family: Poppins, sans-serif;
		padding: 1em;
		font-size: .9em;
		margin: 0
	}
	
	::-webkit-scrollbar {
		background: #171717;
		padding: 10em;
		width: 10px
	}
	
	::-webkit-scrollbar-thumb {
		margin: 2em;
		background: #ffd523;
		border-radius: .5em
	}
	
	@media screen and (max-width: 600px) {
		.newheader h1 {
			font-size: 0.8em;
		}
	}
	</style>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/autosize.js/5.0.0/autosize.min.js" integrity="sha512-zibtOTbkMuTivXGk5b8yJFGLIB1jF90NuV7gwNcVWL3xZx/I1HdkXU2pCZhadsuaS5HMUzabvRqK4WmWeKrwUg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<title>Editing ${username}</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.5.0/font/bootstrap-icons.min.css" integrity="sha512-xnP2tOaCJnzp2d2IqKFcxuOiVCbuessxM6wuiolT9eeEJCyy0Vhcwa4zQvdrZNVqlqaxXhHqsSV1Ww7T2jSCUQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<script language="javascript" type="text/javascript" src="/static/js/codemirror-5.62.0/lib/codemirror.js"></script>
	<link rel="stylesheet" type="text/css" href="/static/js/codemirror-5.62.0/lib/codemirror.css"> </link>
	<link rel="icon" href="https://img.icons8.com/emoji/48/000000/flower-playing-cards.png" />
</head>

<body>
	<form action="/save" method="POST">
		<header class="newheader"> <span> <i class="bi bi-pencil-square" style="color: black;"></i> <h1>${username}</h1> </span> <span><button class="btn" type="submit">Save <i class="bi bi-clipboard"></i></button> <a href="/"><i class="bi bi-house-fill"></i></span></a>
		</header>
		<div class="wrapper">
			<textarea id="code" autofocus name="value" class="textarea" placeholder="Type something"></textarea>
			<input type="text" style="display: none;" name="username" value=${username}> </div>
		</div>
	</form>
	<script>
	autosize(document.querySelector('textarea'));
	var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
		lineNumbers: true,
		mode: 'text/x-perl',
		matchBrackets: true,
	});
	</script>
</body>

</html>
	`
}