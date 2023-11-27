//referências do DOM - HTML

const inpCod = document.getElementById('inpCod');
const inpNome = document.getElementById('inpNome');
const inpDescri = document.getElementById('inpDescri');
const inpFabricante = document.getElementById('inpFabricante');
const inpQtda = document.getElementById('inpQtda');
const inpPreco = document.getElementById('inpPreco');
const inpCusto = document.getElementById('inpCusto');
const inpData = document.getElementById('inpData');

const btnCon =  document.getElementById('btnCon');
const btnCad =  document.getElementById('btnCad');
const btnAlt =  document.getElementById('btnAlt');
const btnExc =  document.getElementById('btnExc');
const btnLmp = document.getElementById('btnLmp');

// Lógica do Programa

const api = axios.create({
    baseURL : 'https://back-end-niga.onrender.com'
});


async function consultaNome(){
    const nome = inpNome.value;

    const response = await api('/produtos/' + nome)
    inpCod.value = response.data[0].cod;
    inpNome.value = response.data[0].nome;
    inpDescri.value = response.data[0].descri;
    inpFabricante.value = response.data[0].fabricante;
    inpQtda.value = response.data[0].qtda;
    inpCusto.value = response.data[0].custo;
    inpPreco.value = response.data[0].preco;
    inpData.value = response.data[0].data;

    console.log(response.data[0].cod);

}

async function inclusao(){
    const nome = inpNome.value;
    const fabricante = inpFabricante.value;
    const descri = inpDescri.value;
    const qtda = inpQtda.value;
    const custo = inpCusto.value;
    const preco = inpPreco.value;

    data ={
        "nome" : nome,
        "fabricante" : fabricante,
        "descri" : descri, 
        "qtda" : qtda,
        "preco" : preco,
        "custo" : custo
    }
    console.log(data);
    const response = await api.post('/produtos', data);

}

async function Alteracao(){
    const cod =  inpCod.value;

    const nome = inpNome.value;
    const fabricante = inpFabricante.value;
    const descri = inpDescri.value;
    const qtda = inpQtda.value;
    const custo = inpCusto.value;
    const preco = inpPreco.value;

    data ={
        "nome" : nome,
        "fabricante" : fabricante,
        "descri" : descri, 
        "qtda" : qtda,
        "preco" : preco,
        "custo" : custo
    }
    console.log(data);
    const response = await api.put('/produtos/' + cod, data);

}

async function exclusao(){
    const cod =  inpCod.value;


    const response = await api.delete('/produtos/' + cod);
    alert('Registro Excluido !!!')
}

async function Limpar() {
    inpCod.value = '';
    inpNome.value = '';
    inpDescri.value = '';
    inpFabricante.value = '';
    inpQtda.value = '';
    inpCusto.value = '';
    inpPreco.value = '';
    inpData.value = '';
}

    

btnLmp.onclick = ()=>{
    Limpar();
}

btnCon.onclick = ()=>{
    consultaNome();
}

btnCad.onclick = ()=>{
    inclusao();
}

btnAlt.onclick =()=>{
    Alteracao();
}

btnExc.onclick = ()=>{
    exclusao();
}

  