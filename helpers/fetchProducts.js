const fetchProducts = async (computador) => {
  try {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;

    const resposta = await fetch(URL);
    const tratamento = await resposta.json();

    return tratamento;
} catch (error) {
     return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
