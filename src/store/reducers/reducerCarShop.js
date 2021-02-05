const ESTADO_INICIAL = {
  peca:[],
  feed: [
    {
      id: 1,
      item:'SSD Kingston A400',
      desc:'240GB, SATA, Leitura 500MB/s, Gravação 350MB/s - SA400S37/240G',
      preco:'R$ 250,00',
      img:'https://images7.kabum.com.br/produtos/fotos/85197/85197_index_gg.jpg'
    },
    {
      id: 1,
      item:'Teclado Mecânico',
      desc:'Logitech G512 Carbon, RGB, Switch GX Brown, ABNT2 - 920-009400',
      preco:'R$ 950,00',
      img:'https://images5.kabum.com.br/produtos/fotos/109695/teclado-mecanico-gamer-logitech-g512-carbon-rgb-switch-gx-brown-abnt2-920-009400_1583755022_gg.jpg'
    },
    {
      id: 1,
      item:'Mouse Sem Fio Gamer Razer Lancehead',
      desc:'Chroma, Mechanical Switch, 9 Botões, 16000DPI - RZ01-02120100-R3U1',
      preco:'R$ 1900,00',
      img:'https://images1.kabum.com.br/produtos/fotos/93611/93611_1_1510655994_gg.jpg'
    },
  ]
}

export default function pecas(state = ESTADO_INICIAL, action){
  console.log(state.peca);
  if(action.type === "ADICIONAR_CARRINHO"){
    return {
      ...state,
      peca: action.pecas
    }
  }
  return state
}