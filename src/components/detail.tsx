import './detail.css'


const Detail = (props:{description:string, icon:string, colour:string}) => {
  return (
    <p className='detail-info'>
      <span style={{background:props.colour}}>
        <i className={`fa-solid ${props.icon}`}></i>
      </span>
      <span>{props.description}</span>
    </p>
  );
};

export default Detail;
