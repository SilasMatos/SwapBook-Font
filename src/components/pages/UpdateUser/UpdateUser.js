import React, { useState } from 'react';
import '../UpdateUser/UpdateUser.css'
import Navbar2 from '../../Navbar2/Navbar2';
import Footer from '../../Footer/Footer';
import {BsShieldLock} from 'react-icons/bs'
import {RiFileUserLine} from 'react-icons/ri'
import {BsCreditCard2Front} from 'react-icons/bs'
function UpdateUser() {
  const [divExibida, setDivExibida] = useState('informacoesPessoais');

  const exibirDiv = (div) => {
    setDivExibida(div);
  };

  return (
    <div className=''>
       <Navbar2 />
       <div className='container'>
       <div className="container-Up">
      <div className="botoes-Up">
        
       
        <button 

          id='btn-Up'
          className={divExibida === 'informacoesPessoais' ? 'botaoAtivo' : ''}
          onClick={() => exibirDiv('informacoesPessoais')}
        >
         <RiFileUserLine id='icon-up'/> Informações Pessoais
        </button>
        <button
        id='btn-Up'
          className={divExibida === 'segurancaPrivacidade' ? 'botaoAtivo' : ''}
          onClick={() => exibirDiv('segurancaPrivacidade')}
        >
          <BsShieldLock id='icon-up'/> Segurança e Privacidade
        </button>
      
        <button id='btn-Up'
          className={divExibida === 'assinaturas' ? 'botaoAtivo' : ''}
          onClick={() => exibirDiv('assinaturas')}
        >
         <BsCreditCard2Front id='icon-up'/>  Assinaturas
        </button>
      </div>

      <div className="conteudo-Up">
      {divExibida === 'informacoesPessoais' && (
        <div className="container itens-cont-up">
          <div className='itens-up'>
           <h5 className='tx-up'>Meu Cadastro</h5>
           <p className='tx-p-up'>Configure seu Cadastro.</p>
           <div className="itens-dados-up">
            <h6>Dados da conta</h6>
            <p id='pr-up'>Nome de Usúario</p>
            <input className='input-up'></input>
            <p id='pr-up'>Gênero</p>
            <form>
            <div className='radio-div'>
              <label id='tm-lb'>
                <input type="radio" class="radio-up" name="gender" value="homem"></input>
                Homem
              </label >
              <label id='tm-lb'>
                <input type="radio" class="radio-up" name="gender" value="mulher"></input>
                Mulher
              </label>
              <label id='tm-lb'>
                <input type="radio" class="radio-up" name="gender" value="outros"></input>
                Outros
              </label>
            </div>

            </form>
            <p id='tp-up'>Tipo de Conta:<span id='sp-up'>Particular</span></p>
            <button className='btn-up'> Salvar Alterações
</button>
          </div>
          </div>
          </div>
        )}
        {divExibida === 'segurancaPrivacidade' && (
          <div>
           <h5>Segurança e privacidade</h5>
           <p>Aumente a segurança e tenha o controle da sua conta</p>
          </div>
        )}
     
        {divExibida === 'assinaturas' && (
          <div>
           <h5>Suas Assinaturas</h5>
          </div>
        )}
      </div>
      </div>
    </div>
  <Footer />
  </div>
  );
}

export default UpdateUser;
