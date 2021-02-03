import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SearchHero() {
  const history = useHistory();
  const [recipe, setRecipe] = useState('');
  const [ingredients, setIngredients] = useState('');

  const searchQuery = (e) => {
    e.preventDefault();
    setRecipe('');
    history.push(`/search?q=${recipe}&i=${ingredients.split(',').join('%2C')}`);
  };

  return (
    <div className="search-hero">
      <span>Search with ingredients</span>
      <div className="search-container">
        <div className="search-block">
          <input
            type="text"
            placeholder="bread"
            value={recipe}
            onChange={(e) => {
              setRecipe(e.target.value);
            }}
          />
        </div>
        <div className="search-block">
          <input
            type="text"
            placeholder="garlic,milk,cheese"
            value={ingredients}
            onChange={(e) => {
              setIngredients(e.target.value);
            }}
          />
          <button onClick={searchQuery}>Search</button>
        </div>
      </div>
    </div>
  );
}
