
	
var elements = document.getElementsByClassName('single-line-name');
	
	var alternarAbas = function(){
		
	var aba = this.getAttribute('aba');
	
	var element = document.getElementById(aba);

    //Remover estilo de abas.
	
	var abasSelecao = document.getElementsByClassName('single-line-name');
	
	for (var i = 0;	i < abasSelecao.length; i++){
	
	abasSelecao[i].children[0].style.display = "none";
	abasSelecao[i].children[1].style.fontWeight = "normal";
    }


	


	
	
	
	//Ocultar abas.
	document.getElementById('posts').style.display = "none";
	document.getElementById('igtv').style.display = "none";
	document.getElementById('saved').style.display = "none";
	document.getElementById('tagged').style.display = "none";
	
	//Mostrar aba que estava oculta.
	element.style.display = "block";
	
	//ADD classe para troca de abas.
	
	this.children[0].style.display = "block";
	this.children[1].style.fontWeight = "bold";
	this.children[2].style.display = "block";
	this.children[3].style.fontWeight = "bold";
	
	//remover estilo de abas.
     removerEstiloAbas();
	
	
	
}
	
for (var i = 0;	i < elements.length; i++){
	
	elements[i].addEventListener('click',alternarAbas,false);
}
	
	
	
	
	

