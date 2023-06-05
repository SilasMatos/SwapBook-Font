import React, { useEffect, useState } from "react";
import Navbar2 from "../../Navbar2/Navbar2";
import styles from "../categories/Categorias.module.css";
import Cards from "../../Cards/Cards";
import api from "../../../Services/Api";
import Loader from "../../loading/Loader";
import { RiEmotionSadLine } from "react-icons/ri";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [dependencies, setDependencies] = useState();
  const [sliderValue, setSliderValue] = useState(0);
  const [ priceFilter, setPriceFilter] = useState([]);
  const [ state, setState] = useState([]);
  

  async function getProducts() {
    try {
      const Products = await api.get(`/product/`);
      const { data } = Products;
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.log("Erro ao carregar os produtos");
    }
  }

  useEffect(() => {
    getProducts();
  }, []);


  function getSearchProducts(name) {
    
    const filteredProducts = products.filter((product) =>
      product.category.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredData(filteredProducts);
    setDependencies(true);
    
  }

  function getPriceProducts(price) {
    
    const filteredProducts = products.filter((product) =>
    parseFloat(product.price) <= parseFloat(price)
    );
    setPriceFilter(filteredProducts);
  }

  function getState(name) {
    
    const filteredProducts = products.filter((product) =>
      product.state.toLowerCase().includes(name.toLowerCase())
    );
    setState(filteredProducts);
  }
  console.log(state)
  return (
    <div>
      <Navbar2 />

      <div className="container">
      <div className={styles.container}>
        <div className={`${styles.filters} fs-5`}>
          <div className={`${styles.generes} select-Categories pb-10`}>
            <div  clasName="small-tittle mb-5 ">
              <h4>Filtro por Gêneros</h4>
              <label  class="container ">
              Todos
              <input type="checkbox" value="" onClick={(e)=>{setDependencies(false)}}/>
              <span class="checkmark"></span>
            </label>
            <label  class="container ">
              Historia
              <input type="checkbox" value="Historia" onClick={(e)=>{getSearchProducts(e.target.value)}}/>
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Terror
              <input type="checkbox" value="Terror" onClick={(e)=>{getSearchProducts(e.target.value)}} />
              <span class="checkmark"></span>
            </label>
            <label class="container">
            Romance
              <input type="checkbox" value="Romance" onClick={(e)=>{getSearchProducts(e.target.value)}}/>
              <span class="checkmark"></span>
            </label>
            <label class="container">
            Ficção
              <input type="checkbox" value="Ficção" onClick={(e)=>{getSearchProducts(e.target.value)}}/>
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Biografia
              <input type="checkbox" value="Biografia" onClick={(e)=>{getSearchProducts(e.target.value)}} />
              <span class="checkmark"></span>
            </label>
            </div>
          </div>

          <div className="SliderContainer">
            <h4>Filtre pelo preço</h4>
            <div className="Slider">
              <input
                className="Slider_input mt-3"
                type="range"
                id="volume"
                name="volume"
                min="0"
                max="1000"
                onChange={(e)=>{setSliderValue(e.target.value)}} 
                onClick={(e)=>getPriceProducts(e.target.value)}
                />
                <div className=" mb-5"> 0 - {sliderValue}</div>
            </div>
          </div>
          <div className="select-Categories pb-10">
            <div className={`${styles.generes} fs-1 small-tittle mb-5`}>
              <h4>Filtro por Estado</h4>
            </div>
            <label class="container">
              Novo
              <input type="checkbox" value="Novo" onClick={(e)=>{getState(e.target.value)}}/>
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Muito Bom
              <input type="checkbox" value="Muito bom" onClick={(e)=>{getState(e.target.value)}}/>
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Bom
              <input type="checkbox" value="Bom" onClick={(e)=>{getState(e.target.value)}}/>
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Regular
              <input type="checkbox" value="Regular" onClick={(e)=>{getState(e.target.value)}}/>
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Ruim
              <input type="checkbox" value="Ruim" onClick={(e)=>{getState(e.target.value)}}/>
              <span class="checkmark"></span>
            </label>
          </div>
        </div>

        <div>
          <h5>Livros</h5>
          <div className="d-flex flex-wrap ">
            {loading ? <Loader/> : null}
            {state.length === 0 && !dependencies && priceFilter.length === 0 ? (
  products.map((product) => (
    <div className={styles.Cards_Generes}>
      <Cards
        key={product._id}
        name={product.name}
        _id={product._id}
        price={product.price}
        author={product.author}
        synopsis={product.synopsis}
        src={product.src}
        obj={product}
      />
    </div>
  ))
) : (
  priceFilter.length > 0 ? (
    priceFilter.map((product) => (
      <div className={styles.Cards_Generes}>
        <Cards
          key={product._id}
          name={product.name}
          _id={product._id}
          price={product.price}
          author={product.author}
          synopsis={product.synopsis}
          src={product.src}
          obj={product}
        />
      </div>
    ))
  ) : (
    dependencies ? (
      filteredData.map((product) => (
        <div className={styles.Cards_Generes}>
          <Cards
            key={product._id}
            name={product.name}
            _id={product._id}
            price={product.price}
            author={product.author}
            synopsis={product.synopsis}
            src={product.src}
            obj={product}
          />
        </div>
      ))
    ) : (
      state.length > 0 ? (
        state.map((product) => (
          <div className={styles.Cards_Generes}>
            <Cards
              key={product._id}
              name={product.name}
              _id={product._id}
              price={product.price}
              author={product.author}
              synopsis={product.synopsis}
              src={product.src}
              obj={product}
            />
          </div>
        ))
      ) : <div className="col-not-anum">
      <RiEmotionSadLine id="icon-not-anum" />
      <p>Você não possui livros favoritados no momento</p>
    </div>
    )
  )
)}

          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Categories;
