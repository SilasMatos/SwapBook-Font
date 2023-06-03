import React, { useState, useContext } from 'react';
import { UserContext } from '../UseContext/UserContext';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { AiOutlineInfoCircle, AiOutlineShopping } from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';
import api from '../../Services/Api.js';
import './cardsStyle.css';

function Cards({ src, name, author, price, _id, obj, isFavorite }) {
  const [cart, setCart] = useState([]);
  const [userData] = useContext(UserContext);

  async function handleClick() {
    try {
      const userId = getUserId();
      const productId = _id;

      if (isFavorite) {
        await removeFavorite(userId, productId);
      } else {
        await addFavorite(userId, productId);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  async function addFavorite(userId, productId) {
    try {
      const response = await api.post(`/user/${userId}/favorites/${productId}`);
      console.log(response.data.message);
      alert('adicionado')
    } catch (error) {
      console.log(error);
      alert('Error adding favorite');
    }
  }

  async function removeFavorite(userId, productId) {
    try {
      const response = await api.delete(`/user/${userId}/favorites/${productId}`);
      console.log(response.data.message);
    } catch (error) {
      console.log(error);
      alert('Error removing favorite');
    }
  }

  function getUserId() {
    if (userData && userData._id) {
      return userData._id;
    }
    return null; 
  }

  return (
    <div className="product-card">
      <div className="product-tumb">
        <img
          src={`${process.env.REACT_APP_API}/${src}`}
          id="img-card"
          alt="Denim Jeans"
        />
      </div>
      <div className="product-details">
        <span className="product-catagory">
          Por <span id="author-edit">{author}</span>
        </span>
        <h6>
          <a href="">{name}</a>
        </h6>
        <div className="product-bottom-details">
          <div className="product-price">R${price}</div>
          <div className="product-links">
            <a href="">
              {' '}
              <AiOutlineShopping id="icon-info" />
            </a>
            <button className="fs-5" onClick={handleClick}>
              {cart.some((itemCart) => itemCart._id === obj._id) ? (
                <AiFillHeart />
              ) : (
                <MdFavoriteBorder id="icon-info" />
              )}
            </button>
            <a href={`/details/${_id}`}>
              {' '}
              <AiOutlineInfoCircle id="icon-info" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
