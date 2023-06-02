import React, { useState } from 'react';
import '../UpdateUser/UpdateUser.css'
import Navbar2 from '../../Navbar2/Navbar2';
import Footer from '../../Footer/Footer';
import {BsShieldLock} from 'react-icons/bs'
import {RiFileUserLine} from 'react-icons/ri'
import {BsCreditCard2Front} from 'react-icons/bs'
import { UserContext } from '../../UseContext/UserContext';
import { useContext, useEffect } from 'react';
import api from '../../../Services/Api';

function UpdateUser() {
  const [divExibida, setDivExibida] = useState('informacoesPessoais');
  const [userData, setUserData] = useContext(UserContext);
  const [UserInformations, setUserInformations] = useState([])
  const [dependencies, setDependecies] = useState(false)
  const [forms, setForms] = useState([{
    name: '',
    email: '',
    password: '',
    phone: '',
    dateBirth: '',
    gender:'',
  }])

  async function getUser(){
    const User = await api.get(`user/${userData._id}`);
    const {data} = User
    setUserInformations(data)
    setDependecies(true)
    setForms({
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      dateBirth: data.dateBirth,
      gender:data.gender,
})
  };
  console.log(forms)
  useEffect(()=>{
    getUser()
  }, [dependencies])


  async function UpdateUserHandler(e) {
    e.preventDefault();
    try {
      const response = await api.put(
        `/user/${userData._id}`,
        forms,
        { headers: { auth: `${userData._id}` } }
      );
      alert("Usuário atualizado com sucesso!");
    } catch (err) {
      alert(`falha ao atualizar usuário ${userData._id}`);
    }
  }

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
            <input className='input-up'onChange={(event) =>
                    setForms({ ...forms, name: event.target.value })
                  }
                  value={forms.name}/>
            <p id='pr-up'>Gênero</p>
            <form>
            <div className='radio-div'>
              <label id='tm-lb'>
              {forms.gender == 'masculino'? 
                <input type="radio" class="radio-up" name="gender" onChange={(event) =>
                    setForms({ ...forms, gender: event.target.value })} value="masculino" checked/>
                :
                <input type="radio" class="radio-up" name="gender" onChange={(event) =>
                  setForms({ ...forms, gender: event.target.value })} value="masculino" />}
                  Masculino
              </label >
              <label id='tm-lb'>
                {forms.gender == 'feminino'? 
                  <input type="radio" class="radio-up"name="gender" checked onChange={(event) =>
                    setForms({ ...forms, gender: event.target.value })} value="feminino"/>
                

                : <input type="radio" class="radio-up"name="gender" onChange={(event) =>
                  setForms({ ...forms, gender: event.target.value })} value="feminino"/>
              
                }
                Feminino
                </label>
              <label id='tm-lb'>
              {forms.gender == 'outro'? 
                <input type="radio" class="radio-up" onChange={(event) =>
                    setForms({ ...forms, gender: event.target.value })} name="gender" value="outro" checked/>
                : <input type="radio" class="radio-up" onChange={(event) =>
                  setForms({ ...forms, gender: event.target.value })} name="gender" value="outro"/>}
                  Outro
              </label>
            </div>
            </form>
            <div className='itens2-up'>
            <p id='pr-up'>Email</p>
            <input className='input-up' onChange={(event) =>
                    setForms({ ...forms, email: event.target.value })
                  }
                  value={forms.email} checked/>
            </div>
            <div className='itens2-up'>
            <p id='pr-up'>phone</p>
            <input className='input-up' onChange={(event) =>
                    setForms({ ...forms, phone: event.target.value })
                  }
                  value={forms.phone}/>
            </div>
            <p id='tp-up'>Tipo de Conta:<span id='sp-up'>Particular</span></p>
            <button className='btn-up' onClick={UpdateUserHandler}> Salvar Alterações
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
