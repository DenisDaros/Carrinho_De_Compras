const fetchItem = async (id) => {
 try {
  const link = `https://api.mercadolibre.com/items/${id}`;
  const retorno = await fetch(link);
  const tratando = await retorno.json();
  return tratando;
} catch (error) {
   return error;
}
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
