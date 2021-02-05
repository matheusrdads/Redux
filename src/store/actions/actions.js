
export function alternarProduto(especs, item) {

  return {
    type: "TOGGLE_ITEM",
    especs,
    item,
  };
}

export function adicionarCarrinho(state, pecas) {
  console.log("ACTION", pecas)
  return {
    type: "ADICIONAR_CARRINHO",
    pecas: [...state, pecas]
  }
}
