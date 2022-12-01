import './index.css'

import Rating from '../Rating'
import Category from '../Category'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    updateRating,
    updateCategory,
    onChangeSearchProduct,
    clearFiltersApplied,
    searchProduct,
  } = props

  //   const onChangeSearch = event => {
  //     onChangeSearchProduct(event.target.value)
  //   }
  const clearFilters = () => {
    clearFiltersApplied()
  }
  const onKeyDownPressed = event => {
    console.log(event.key)
    if (event.key === 'Enter') {
      onChangeSearchProduct(event.target.value)
    }
  }
  return (
    <div className="filters-group-container">
      <input
        type="search"
        className="search-input"
        placeholder="Search"
        value={searchProduct}
        // onChange={onChangeSearch}
        onKeyDown={onKeyDownPressed}
      />
      <ul className="category-container">
        <h1 className="category-heading">Category</h1>
        {categoryOptions.map(eachOption => (
          <Category
            details={eachOption}
            key={eachOption.categoryId}
            updateCategory={updateCategory}
          />
        ))}
      </ul>
      <ul className="category-container">
        <h1 className="category-heading">Rating</h1>
        {ratingsList.map(eachRating => (
          <Rating
            details={eachRating}
            key={eachRating.ratingId}
            updateRating={updateRating}
          />
        ))}
      </ul>
      <button type="button" className="clear-filter" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
