import '../styles/Card.css'

export const Card = ({src, name}) => {
    return <div className='card'>
        <img id={name} src={src} alt={name}/>
        <h3>{name}</h3>
    </div>
};