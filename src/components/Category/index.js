import './index.css'

const Category = props => {
  const {
    details: {name, categoryId},
    updateCategory,
  } = props

  const onClickCategory = () => {
    updateCategory(categoryId)
  }
  return (
    <li className="category-options">
      <p className="option-btn" onClick={onClickCategory}>
        {name}
      </p>
    </li>
  )
}

export default Category
