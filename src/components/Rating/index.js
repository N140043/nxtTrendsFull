import './index.css'

const Rating = props => {
  const {
    details: {ratingId, imageUrl},
    updateRating,
  } = props

  const onClickRating = () => {
    updateRating(ratingId)
  }
  return (
    <li className="category-options">
      <button type="button" className="option-btn" onClick={onClickRating}>
        <img
          src={imageUrl}
          alt={`rating ${ratingId}`}
          className="rating-image"
        />
        & up
      </button>
    </li>
  )
}

export default Rating
