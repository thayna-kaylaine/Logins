function validar(){
	var email=document.getElementById("email");
	var senha=document.getElementById("senha");

	if(email.value==""){
		alert("e-mail nao informado");
		email.focus();
		return;
}

if(senha.value==""){
	alert("senha nao informada");
	senha.focus();
	return;

}
alert("seja bem vindo novamente!!!");
 }