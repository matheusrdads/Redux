
const INITIAL_STATE = {
  produtos: {
    desc: "Sorteio de componentes para upgrade do seu setup gamer !",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQusElmY92Ng7QNYIOI6rvsTCf1S5ilFVGclg&usqp=CAU"
  },
  produtoSorteado: {},
  especs: [
    {
      id: 1,
      title: "Sorteio de Pacas de vídeo",
      produtoTipo: [
        {
          id: 1,
          result: "Parabéns! Você Acaba De Ganhar Um Prêmio!",
          img: "https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1205924052",
          desc: "Placa de Vídeo Galax NVIDIA Geforce RTX 3070, 14 Gbps, 8GB, GDDR6, DLSS, Ray Tracing - 37NSL6MD2KOC"
        },

        {
          id: 2,
          result: "Parabéns! Você Acaba De Ganhar Um Prêmio!",
          img: "https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1571050268",
          desc: "Placa de Vídeo Galax NVIDIA GeForce RTX 3090 SG (1-Click OC), 24GB, GDDR6X - 39NSM5MD1GNA"
        },
      ],
    },
    {
      id: 2,
      title: "Sorteio de Processadores",
      produtoTipo: [
        {
          id: 3,
          result: "Parabéns! Você Acaba De Ganhar Um Prêmio!",
          img: "https://images3.kabum.com.br/produtos/fotos/99683/processador-intel-core-i5-9400f-coffee-lake-cache-9mb-2-9ghz-4-1ghz-max-turbo-lga-1151-bx80684i59400f_processador-intel-core-i5-9400f-coffee-lake-cache-9mb-2-9ghz-4-1ghz-max-turbo-lga-1151-bx80684i59400f_1564429485_gg.jpg",
          desc: "Processador Intel Core i5-9400F Coffee Lake, Cache 9MB, 2.9GHz (4.1GHz Max Turbo), LGA 1151, Sem Vídeo - BX80684I59400F"

        },
        {
          id: 4,
          result: "Parabéns! Você Acaba De Ganhar Um Prêmio!",
          img: "https://images6.kabum.com.br/produtos/fotos/112996/processador-intel-core-i7-10700k-cache-16mb-3-8ghz-lga-1200-bx8070110700k_1589208570_gg.jpg",
          desc: "Processador Intel Core i7-10700K, Cache 16MB, 3.8GHz (5.1GHz Max Turbo), LGA 1200 - BX8070110700K"

        },
      ],
    },
  ],
};

export default function hardware(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_ITEM") {
    return {
      // um novo state é criado e retornado
      ...state,
      produtos: action.item,
      produtoSorteado: action.especs,
    };
  }
  return state;
}
