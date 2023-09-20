function Enviar(){
    var nome = document.getElementById("nomeid")
    
    if(nome.volue != ""){
        alert("Obrigado sr(a)" + nome.volue + 'seu formul´rio foi enviado e descartado')}
    
}

    function limpa_formulário_cep(){
        //Essa função limpa o formulário e deixa ele sem nada
        // escrita substituido por vazio("").
    document.getAnimations('rua').value=("");
    document.getAnimations('bairro').value=("");
    document.getAnimations('cidade').value=("");
    document.getAnimations('UF').value=("");
    }

    function meu_callback(conteudo){
        if(!("erro" in conteudo)){
            //Caso não dê nenhum erro, os campos serão preenchidos com informações 
            //referentes ao cep informado.
            document.getAnimations('rua').value=(conteudo.logadouro);
            document.getAnimations('bairro').value=(conteudo.bairro);
            document.getAnimations('cidade').value=(conteudo.localidade);
            document.getAnimations('UF').value=(conteudo.uf);
        }
        else{
            limpa_formulário_cep();
            alert("Cep não encontrado")
        }
    function pesquisacep(valor){
        //Nova variavell "cep" somente com digitos.
        var cep = valor.replace(/\D/g,'');

        if(cep != ""){
            //Expressão regular para validar CEP.
        var validacep = /^[0-9](8)&/;

        if(validacep.test(cep))
            document.getAnimations('rua').volue='...';
            document.getAnimations('bairro').volue='...';
            document.getAnimations('cidade').volue='...';
            document.getAnimations('uf').volue='...';
            //Cria um elemento Javascript, ele que vai ser usado para acessar
            //o servidor dos Correios(ViaCEP)
        var script = document.getAnimations('script');
        
        script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback/';

        document.body.appendChild(script);
        } else{
            limpa_formulário_cep();
            alert("Seu CEP ta errdo dnv")
        }
        } else{
        limpa_formulário_cep();
            }
        }

    