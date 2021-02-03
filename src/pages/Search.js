import { useFetchRecipes, useQuery } from '../hooks';
import { RecipeCard, SearchHero, Hero } from '../components';
import { Fragment } from 'react';

export default function Search() {
  const query = useQuery();
  const string = query.get('q');
  const ingr = query.get('i');
  const { error, loading, data } = useFetchRecipes(string, ingr);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  return (
    <div className="container">
      <Hero />
      <SearchHero />
      <div className="action">
        <span>
          <b>Results for:</b> <i>{string ? string : 'unspecified'}</i>{' '}
          {ingr && (
            <Fragment>
              <b>Ingredients:</b> <i>{ingr}</i>
            </Fragment>
          )}
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
