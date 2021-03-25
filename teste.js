

//Gerar um relógio em tempo real

<script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
</script>


<div id="txt">
<script type="text/javascript">document.write(startTime())</script>
</div>

//Inputs modificando após clique

<input type="text" value="usuario" onblur="if(this.value == ''){ this.value='usuario';}" onfocus="if(this.value == 'usuario'){ this.value='';}"/>
<input value="senha" onblur="if(this.value == ''){ this.value='senha'; this.type='text';}" onfocus="if(this.value == 'senha'){ this.value=''; this.type='password';}"/>

//Pegar a URL

<script>document.write(window.location.href);</script>
// Encontar uma palavra numa String (case sensitive)

<script>
var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}
</script>
// Retirar os 5 últimos caracteres e adicionar uma nova palavra

<script>
var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);

</script>
//Substituir palavra numa string

<script>
var str = 'Terminal Root';
var str = str.replace("Root", "Linux");
document.write(str);
</script>
// Redirecionamento (tem que inciar com http://)

<script>window.location = "http://www.terminalroot.com.br";</script>
// Abrir Pop-Up no Centro da Página

<script>
	var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}
</script>


<a href="http://www.terminalroot.com.br/" onclick="NovaJanela(this.href,'nomeJanela','820','560','yes');return false">Abrir Pop-Up</a>
// Mostrar a Data

<script type="text/javascript">document.write(Date());</script>
//Atrasando o tempo

<script type="text/javascript">

function timeMsg(){
	var t=setTimeout("alertMsg()",3000);
}

function alertMsg(){
	document.write("Terminal Root");
}

</script>


<a href="#" onClick="timeMsg()">Clique aqui a mensagem só aparecerá depois de 3 segundos</a>
