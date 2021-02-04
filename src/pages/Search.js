import { useState } from 'react';
import { useFetchRecipes, useQuery } from '../hooks';
import {
  RecipeCard,
  SearchHero,
  Hero,
  Pagination,
  Loading,
  Error,
} from '../components';
import { Fragment } from 'react';

export default function Search() {
  const query = useQuery();
  const string = query.get('q');
  const ingr = query.get('i');
  const [page, setPage] = useState(1);
  const { error, loading, data } = useFetchRecipes(string, ingr, page);

  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <div className="container">
      <Hero />
      <SearchHero />
      {data[0] ? (
        <Fragment>
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
        </Fragment>
      ) : (
        <div className="no-result">
          <span>
            Sorry, <b>there's no result for:</b> <i>{string}</i>{' '}
            {ingr && (
              <Fragment>
                <b>Ingredients:</b> <i>{ingr}</i>
              </Fragment>
            )}
          </span>
        </div>
      )}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
