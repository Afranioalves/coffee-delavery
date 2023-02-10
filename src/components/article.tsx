import './article.css'
const Article = () =>{

    return(
        <>
            <article className='article'>
                <img src="/images/Coffee/Coffee-1.svg" alt="image-cup-of-coffe" />
                <div className='types'>
                    <span>TRADICIONAL</span>
                </div>
                <p className='coffee-name'>Expresso Tradicional</p>
                <p className='coffee-description'>O tradicional café feito com água <br /> quente e grãos moídos</p>

                <div>
                    <p>
                        <span>R$</span> 
                        <span>9,90</span>
                    </p>
                    <div>
                        <div>
                            <button>-</button>
                            <input type="number" name='amount'/>
                            <button>+</button>
                        </div>

                        <button><i className="fa-solid fa-cart-shopping "></i></button>

                    </div>
                </div>

            </article>
        </>
    )

}
export default Article;