import { useState } from 'react'
import './article.css'

interface PropsArticles{
    id: number,
    image:string,
    name:string,
    description:string,
    price:number,
    type:Array<string>
    handleClick: (id: number, amount: number) => any
}

const Article = (props:PropsArticles) =>{
    const { id, handleClick } = props
    const [ amount, setAmount ] = useState(1)
    const handleChange = (val: number) => {
        setAmount(amount + val)
    }

    const typeRender = ()=>{
        return(
            props.type.map((type:string, index:number)=>{
                return(
                    <span key={index}>{type}</span>
                )
                
            })
        )

    }

    return(
        <>
            <article className='article'>
                <div className='box-coffee-image'>
                    <img src={props.image} alt="image-cup-of-coffe" className="coffee-image" />
                </div>
                <div className='box-types'>
                   {typeRender()}
                </div>
                <p className='coffee-name'>{props.name}</p>
                <p className='coffee-description'>{props.description}</p>

                <div className='box-option'>
                    <p>
                        <span className='currency'>R$</span> 
                        <span className='price'>9,90</span>
                    </p>
                    <div className='options'>
                        <div className="box-amout">
                            <button onClick={() => handleChange(-1)}>-</button>
                            <input type="number" name='amount' className='input-amount' min={1} readOnly={true} value={amount}/>
                            <button onClick={() => handleChange(1)}>+</button>
                        </div>

                        <button className="btn-add-to-cart" onClick={() => handleClick(id, amount)}><i className="fa-solid fa-cart-shopping "></i></button>

                    </div>
                </div>

            </article>
        </>
    )

}
export default Article;