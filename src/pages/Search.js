import { useFetchRecipes, useQuery } from '../hooks';
import { RecipeCard } from '../components';
import { useParams } from 'react-router-dom';

export default function Search() {
  const query = useQuery();
  const string = query.get('q');
  // const ingr = query.get('i');
  const { error, loading, data } = useFetchRecipes(string);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  return (
    <div className="container">
      <div className="hero">
        <span>Find The Best Recipe</span>
        <img
          src="https://images.unsplash.com/photo-1601315379734-425a469078de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
          alt=""
        />
      </div>
      <div className="action">
        <span>
          <b>Results for:</b> <i>{string}</i>
        </span>
      </div>
      <div className="data-list">
        {data.map((el, i) => {
          const { title, href, ingredients, thumbnail } = el;
          return (
            <RecipeCard
              thumbnail={thumbnail}
              title={title}
              href={href}
              ingredients={ingredients}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
