import Menu from "../../components/menu";
import Detail from "../../components/detail";
import './index.css'

const Home = ()=>{

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

                    </div>
                </section>

            </main>
        </>
    )
}

export default Home;