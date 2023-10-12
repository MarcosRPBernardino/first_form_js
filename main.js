const form = document.getElementById('formProposta');
const nome_inteiro = document.getElementById('nomeCompleto');
let nomeRegistrado = false;
const numeroA = document.getElementById('propostaMinima');
const numeroB = document.getElementById('maximoProposta');
let numerosValidados = false;

function validaNome(fullName) {
    const nomeComoArray = fullName.split(' ');
    return nomeComoArray.length >= 2;
}

function validaProposta( numA, numB ){
    return numB > numA
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const mensagemNomeValido = `O nome <b>${nome_inteiro.value}</b> é válido!`
    const mensagemNomeInvalido = `O nome <b>${nome_inteiro.value}</b> é inválido!`
    const mensagemNumeroValido = `A proposta mínima de  <b>${numeroA.value}</b> e máxima de <b>${numeroB.value}</b> é válido!`
    const mensagemNumeroInvalido = `A proposta mínima de  <b>${numeroA.value}</b> e máxima de <b>${numeroB.value}</b> é inválido!`

    nomeRegistrado = validaNome(nome_inteiro.value);
    numerosValidados = validaProposta(numeroA.value , numeroB.value);

    if (nomeRegistrado) {
        const containerNome = document.querySelector('.mensagem-nome-valido');
        containerNome.innerHTML = mensagemNomeValido;
        containerNome.style.display = 'block';

        nome_inteiro.value = ''
    } else {
        nome_inteiro.style.border = '1px solid red';
        const containerNomeInv = document.querySelector('.mensagem-nome-invalido');
        containerNomeInv.innerHTML = mensagemNomeInvalido;
        containerNomeInv.style.display = 'block';

        nome_inteiro.value = ''
    }

    if (numerosValidados) {
        const containerNumero = document.querySelector('.mensagem-numero-valido');
        containerNumero.innerHTML = mensagemNumeroValido;
        containerNumero.style.display = 'block';

        numeroA.value = ''
        numeroB.value = ''
    } else {
        numeroA.style.border = '1px solid red';
        numeroB.style.border = '1px solid red';
        const containerNumeroInv = document.querySelector('.mensagem-numero-invalido');
        containerNumeroInv.innerHTML = mensagemNumeroInvalido;
        containerNumeroInv.style.display = 'block';

        numeroA.value = ''
        numeroB.value = ''
    }

    nome_inteiro.addEventListener('change', function (e) {

        nomeRegistrado = validaNome(e.target.value);
        numerosValidados = validaProposta(e.target.value);

        if (!nomeRegistrado) {
            nome_inteiro.style.border = '1px solid red';
            document.querySelector('.mensagem-nome-valido').style.display = 'none';
        } else {
            nome_inteiro.style.border = '';
            document.querySelector('.mensagem-nome-invalido').style.display = 'none';
        }
    });

    numeroA.addEventListener('change', function (e) {
        const numA = parseInt(e.target.value);
        const numB = parseInt(numeroB.value);
        numerosValidados = validaProposta(numA, numB);
    
        if (!numerosValidados) {
            numeroA.style.border = '1px solid red';
            numeroB.style.border = '1px solid red';
            document.querySelector('.mensagem-numero-valido').style.display = 'none';
        } else {
            numeroA.style.border = '';
            numeroB.style.border = '';
            document.querySelector('.mensagem-numero-invalido').style.display = 'none';
        }
    });
    
    numeroB.addEventListener('change', function (e) {
        const numA = parseInt(numeroA.value);
        const numB = parseInt(e.target.value);
        numerosValidados = validaProposta(numA, numB);
    
        if (!numerosValidados) {
            numeroA.style.border = '1px solid red';
            numeroB.style.border = '1px solid red';
            document.querySelector('.mensagem-numero-valido').style.display = 'none';
        } else {
            numeroA.style.border = '';
            numeroB.style.border = '';
            document.querySelector('.mensagem-numero-invalido').style.display = 'none';
        }
    });
})