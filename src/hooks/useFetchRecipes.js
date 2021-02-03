import { useState, useEffect } from 'react';

export default function useFetchRecipes(query, ingredients, page = 1) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  let params = `?p=${page}`;
  let ingredientList = null;
  if (ingredients) {
    ingredientList = ingredients.join('%2C');
  }

  if (!ingredients && query) {
    params = `?p=${page}&q=${query}`;
  } else if (!query && ingredients) {
    params = `?p=${page}&i=${ingredientList}`;
  } else if (query && ingredients) {
    params = `?p=${page}&i=${ingredientList}&q=${query}`;
  } else if (!query && !ingredients) {
    params = `?p=${page}`;
  }
  useEffect(() => {
    fetch(`https://recipe-puppy.p.rapidapi.com/${params}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'a650397bc2mshf4686fc796cb5d9p17a024jsn3bafc416eff8',
        'x-rapidapi-host': 'recipe-puppy.p.rapidapi.com',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params]);

  return {
    loading,
    error,
    data,
  };
}
