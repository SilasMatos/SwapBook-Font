import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [trocaDisponivel, setTrocaDisponivel] = useState(false);
  const [exibirNoMapa, setExibirNoMapa] = useState(false);

  const handleTrocaDisponivelChange = (event) => {
    setTrocaDisponivel(event.target.checked);
  };

  const handleExibirNoMapaChange = (event) => {
    setExibirNoMapa(event.target.checked);
  };

  const handleFormSubmit = () => {
    console.log('Dados do formulário:', {
      trocaDisponivel,
      exibirNoMapa
    });
    setShowModal(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Abrir Modal
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enviar dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="trocaDisponivel">
                Deseja colocar esse livro disponível para troca?
              </label>
              <input
                type="checkbox"
                id="trocaDisponivel"
                checked={trocaDisponivel}
                onChange={handleTrocaDisponivelChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exibirNoMapa">
                Deseja exibir esse livro no mapa?
              </label>
              <input
                type="checkbox"
                id="exibirNoMapa"
                checked={exibirNoMapa}
                onChange={handleExibirNoMapaChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleFormSubmit}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
