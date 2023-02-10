import './article.css'
const Article = () =>{

    return(
        <>
            <article className='article'>
                <div className='box-coffee-image'>
                    <img src="/images/Coffee/Coffee-1.svg" alt="image-cup-of-coffe" className="coffee-image" />
                </div>
                <div className='box-types'>
                    <span>TRADICIONAL</span>
                </div>
                <p className='coffee-name'>Expresso Tradicional</p>
                <p className='coffee-description'>O tradicional café feito com água <br /> quente e grãos moídos</p>

                <div className='box-option'>
                    <p>
                        <span className='currency'>R$</span> 
                        <span className='price'>9,90</span>
                    </p>
                    <div className='options'>
                        <div className="box-amout">
                            <button>-</button>
                            <input type="number" name='amount' className='input-amount' min={1} readOnly={true}/>
                            <button>+</button>
                        </div>

                        <button className="btn-add-to-cart"><i className="fa-solid fa-cart-shopping "></i></button>

                    </div>
                </div>

            </article>
        </>
    )

}
export default Article;