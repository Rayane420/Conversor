function acessarBinario(){
	var decimal = document.querySelector(".decimal").value;
	
	
	var numBinario = parseInt(decimal).toString(2);
 
	document.querySelector(".numBinario").innerHTML = numBinario;

	
}

function acessarDecimal(){
	var binario = document.querySelector(".binario").value;
	
	
	var numDecimal = parseInt(binario, 2);
 
	document.querySelector(".numDecimal").innerHTML = numDecimal;

	
}
function limpar(){
	var decimal = document.querySelector(".decimal").value;
	
	
	var numBinario = parseInt(decimal).toString(2);
 
	document.querySelector(".numBinario").innerHTML = "";

	
}
function limpar2(){
	var binario = document.querySelector(".binario").value;
	
	
	var numDecimal = parseInt(binario, 2);
 
	document.querySelector(".numDecimal").innerHTML = "";

	
}

function acessarPeso(){
	var peso = document.querySelector(".peso").value;
	var numPeso = parseFloat(peso);	
	
	
	var select = document.querySelector('select');
	var para = document.querySelector('p');
	select.addEventListener('change', setSelectPesos);
	
	function setSelectPesos(){
		
		var choice = select.value;		
	
	
		if(choice === '1'){
			document.querySelector(".numPeso").innerHTML = numPeso;
		}
		else if(choice === '2'){
			document.querySelector(".numPeso").innerHTML = numPeso*2;
		} 
		else if(choice === '3'){
			document.querySelector(".numPeso").innerHTML = numPeso*3;
		}
		else if(choice === '4'){
			document.querySelector(".numPeso").innerHTML = numPeso*4;
		} 
		else if(choice === '5'){
			document.querySelector(".numPeso").innerHTML = numPeso*5;
		}	
		else if(choice === '6'){
			document.querySelector(".numPeso").innerHTML = numPeso*6;
		}else{
			para.textContent = 'erro';
		}	
	
	}
	 
	

}