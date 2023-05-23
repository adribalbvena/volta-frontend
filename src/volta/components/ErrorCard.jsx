import './ErrorCardStyles.css'

export const ErrorCard = ({errorMsg}) => {
  return (
    <>
        <div className='error'>Error: {errorMsg}</div>
    </>
  )
}
