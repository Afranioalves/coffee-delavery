import Menu from "../../components/menu";
import Detail from "../../components/detail";
import Article from "../../components/article";
import './index.css'
import products from "../../data/_products";
import { useState, useContext } from "react";
import { search } from "../../services/_searchProduct";
import Coffee from "../../data/_products";
import { Context } from "../../context/cartContext";
import { cartContextType } from "../../context/types";

const Home = ()=>{

    const {cartContext, setCartContext} = useContext(Context) as cartContextType
    
    const handleAddItemInCart = (id: number, amount: number) => {

        const product = search(id, Coffee)
        const searchItemInCart =  search(id, cartContext)
        switch(searchItemInCart){
            case undefined:
                setCartContext(cartContext.concat({...product, amount}))
                alert('product add in cart...')
            break
            default:
                alert('product already exist in cart...')
            break
        }      
    }

    console.log(cartContext)

    const productsRender = () =>{
        return products.map((coffee)=>{
            return(
                <Article
                    key={coffee.id}
                    id={coffee.id}
                    name = {coffee.name}
                    description = {coffee.description}
                    price = {coffee.price}
                    type = {coffee.type}
                    image ={coffee.image}
                    handleClick={handleAddItemInCart}
                />
            )
        })
    }
    return(
        <>
            <main>
                <header>
                    <Menu />
                </header>
                
                <section className="section-info">

                    <div>
                        <h1 className="description">
                            Encontre o café perfeito <br />
                            para qualquer hora do dia
                        </h1>
                        <p className="detail">
                            Com o Coffee Delivery você recebe seu café onde estiver, a <br />
                            qualquer hora.
                        </p>

                        <div className="box-details">
                            <Detail 
                                colour="#C47F17"
                                description="Compra simples e segura"
                                icon = "fa-cart-shopping"
                            />
                             <Detail 
                                colour="#574F4D"
                                description="Embalagem mantém o café intacto"
                                icon = "fa-box"
                            />
                             <Detail 
                                colour="#DBAC2C"
                                description="Entrega rápida e rastreada"
                                icon = "fa-stopwatch"
                            />
                             <Detail 
                                colour="#8047F8"
                                description="O café chega fresquinho até você"
                                icon = "fa-mug-hot"
                            />
                        </div>
                    </div>

                    <div>
                        <img src="/images/Imagem.svg" alt="coffee image" className="coffe-image" />
                    </div>
                </section>

                <section className="section-articles">
                    <h1>Nossos cafés</h1>

                    <div className="box-articles">
                       {productsRender()}
                    </div>
                </section>

            </main>
        </>
    )
}

export default Home;