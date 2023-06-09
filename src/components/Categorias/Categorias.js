import 'bootstrap/dist/css/bootstrap.min.css'
import '../Categorias/categorias.css'
import { AiFillHeart } from 'react-icons/ai'
import {GiPistolGun, GiMaterialsScience, GiScreaming } from 'react-icons/gi'
import {RiSpyFill} from 'react-icons/ri'
import {MdHistoryToggleOff} from 'react-icons/md'
import  {BsFillPersonBadgeFill} from 'react-icons/bs'
import {SiApachemaven} from 'react-icons/si'


function Categorias({setCategory}) {
  

  function updateAction(){
    setCategory("Ação")
  }
  function updateFiction(){
    setCategory("Ficção")
  }
  function updateSuspense(){
    setCategory("Suspense")
  }
  function updateHistory(){
    setCategory("Historia")
  }
  function updateBibiografia(){
    setCategory("bibiografia")
  }
  function updateTerror(){
    setCategory("Terror")
  }
  function updateFantasy(){
    setCategory("Fantasia")
  }
  function updateRomance(){
    setCategory("Romance")
  }

  return (
    <div className="categories container">
      <h2 id="edit-h2-cat"><span>Categorias</span></h2>
    <div className="container cont_edit">
      <div className="icons_cartegory text-center">
        <AiFillHeart className='icon-cart' onClick={updateRomance}/> <p id="tx-color-icon">Romance</p>
      </div>
      <div className="icons_cartegory text-center">
          <GiPistolGun className='icon-cart' onClick={updateAction}/> <p id="tx-color-icon">Ação</p>
      </div>
      <div className="icons_cartegory text-center">
        <GiMaterialsScience className='icon-cart' onClick={updateFiction}/> <p id="tx-color-icon">Ficção</p>
      </div>
      <div className="icons_cartegory text-center">
        <RiSpyFill onClick={updateSuspense} className='icon-cart'/> <p id="tx-color-icon">Suspense</p>
      </div>
      <div className="icons_cartegory text-center">
        <MdHistoryToggleOff onClick={updateHistory} className='icon-cart'/> <p id="tx-color-icon">História</p>
      </div>
      <div className="icons_cartegory text-center">
        <BsFillPersonBadgeFill onClick={updateBibiografia} className='icon-cart'/> <p id="tx-color-icon">Biografia</p>
      </div>
      <div className="icons_cartegory text-center">
        <GiScreaming className='icon-cart' onClick={updateTerror} /> <p id="tx-color-icon">Terror</p>
      </div>
      <div className="icons_cartegory text-center">
        <SiApachemaven className='icon-cart' onClick={updateFantasy} /> <p id="tx-color-icon">Fantasia</p>
      </div>
    </div>
    </div>
  )
}

export default Categorias
