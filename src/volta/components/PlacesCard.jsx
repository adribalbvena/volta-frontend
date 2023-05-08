import './PlacesCardStyles.css'

export const PlacesCard = ({title, description, thumbnail}) => {
  return (
    <>
        <div className='places-container'>
            <img alt={title} src={thumbnail}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </>   
  )
}
