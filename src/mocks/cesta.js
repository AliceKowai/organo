import logoFazenda from "../../assets/logo.png"

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';


const Cesta = {
    topo: {
        titulo: "Detalhes da Cesta"
    },
    detalhes: {
        nomeDoProduto: "Cesta de Verduras",
        nomeFazenda: "Jenny Jack Farm",
        imageFazenda: logoFazenda,
        descricao: "Uma cesta de verduras com produtos cuidadosamente selecionados da fazenda direto para a sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar"
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            }
        ]
    }
}

export default Cesta