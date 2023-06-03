import React, { useEffect, useState } from "react";
import api from "../../../Services/Api";
import Cards from "../../Cards/Cards.js";// Certifique-se de importar o componente de Cards adequado

function Favoritos() {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    fetchFavoriteProducts();
  }, []);

  async function fetchFavoriteProducts() {
    try {
      const userId = localStorage.getItem('id'); // ou obtenha o ID do usuário de alguma forma
      const response = await api.get(`/user/${userId}/favorites`);
      setFavoriteProducts(response.data);
    } catch (error) {
      console.log(error);
      // Trate o erro de acordo com as suas necessidades
    }
  }

  return (
    <div>
      <h1>Meus Favoritos</h1>
      {favoriteProducts.map((product) => (
        <Cards
          key={product._id}
          src={product.src}
          name={product.name}
          author={product.author}
          price={product.price}
          _id={product._id}
          obj={product}
          isFavorite={true}
        />
      ))}
    </div>
  );
}

export default Favoritos;
