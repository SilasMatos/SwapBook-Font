import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import {BsWhatsapp} from 'react-icons/bs'

const BookModal = ({ book, onClose, show }) => {
  const [number, setNumber] = useState('');
  const message = `Olá, vi seu anúncio do Livro ${book.name} no Swap Book, e gostaria de saber se ainda está disponível`

  function removePhoneFormatting(numberTel) {
    return numberTel.replace(/\D/g, "");
  }
    

  const handleWhatsAppClick = () => {
    setNumber(removePhoneFormatting(book.user.phone));
    const whatsappUrl = `https://wa.me/${number}?text=${message}`;
    window.open(whatsappUrl);
  };
  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{book.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={`${process.env.REACT_APP_API}/${book.src}`}
            alt={book.name}
          />
          <h5>Título: {book.name}</h5>
          <p>Autor: {book.author}</p>
          <p>Preço: R$ {book.price}</p>
          <p>Sinopse: {book.synopsis}</p>
          <p>
            Postado por:{" "}
            <Link to={`/user_presentation/${book.user._id}`}>
              {book.user.name}
            </Link>
          </p>
          <div className="d-flex align-items-center cursor-pointer mt-1">
          <BsWhatsapp/>
          <p className="whatsClick pl-1" onClick={handleWhatsAppClick}>Telefone : {book.user.phone} </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookModal;
