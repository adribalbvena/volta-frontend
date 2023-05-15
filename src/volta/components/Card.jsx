import './CardStyle.css'

export const Card = ({title, url}) => {
  return (
    <>
        <div className='card-container'>
            <div className='card-content'>
              <img className='animate__animated animate__fadeIn card-img' alt={title} src={url}/>
              <h3 className='card-title'>{title}</h3>
            </div>
        </div>
    </>
  )
}
