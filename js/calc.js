function calcular (tipo, valor) {
 
    if (tipo === 'acao') {
  
        switch (valor) {
            case 'c':
                // limpar o visor de resultado
                document.getElementById('inputVisor').value = '';
                break;
  
            case '+':
            case '-':
            case '*':
            case '/':
            case '.':
                var resultado = document.getElementById('inputVisor').value;
  
                if (resultado.endsWith('-') || resultado.endsWith('+') || resultado.endsWith('*') || resultado.endsWith('/') || resultado.endsWith('.')) {
                    var tamanho = resultado.length;
  
                    if (tamanho > 1 || (valor === '+' || valor === '-')) {
                        var operacao = resultado.charAt(tamanho - 1);
                        resultado = resultado.replace(operacao, valor);
                        document.getElementById('inputVisor').value = resultado;
                    }
  
                } else if (resultado === '') {
  
                    if (valor === '+' || valor === '-') {
                        document.getElementById('inputVisor').value += valor;
                    }
  
                } else {
                    document.getElementById('inputVisor').value += valor;
                }
  
                break;
  
            case '=':
                if (document.getElementById('inputVisor').value != '') {
                    var valor_campo = eval(document.getElementById('inputVisor').value);
                
                    document.getElementById('inputVisor').value = valor_campo;
                }
  
                break;
        }
    } else if (tipo === 'valor') {
        document.getElementById('inputVisor').value += valor;
    }
  }
  