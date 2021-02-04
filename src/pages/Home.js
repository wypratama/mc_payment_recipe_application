import { useState } from 'react';
import { useFetchRecipes } from '../hooks';
import {
  RecipeCard,
  SearchHero,
  Hero,
  Pagination,
  Loading,
  Error,
} from '../components';

export default function Home() {
  const [page, setPage] = useState(1);
  const { error, loading, data } = useFetchRecipes(null, null, page);

  if (loading) return <Loading />;
  else if (error) return <Error />;
  else
    return (
      <div className="container">
        <Hero />
        <SearchHero />
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
        <Pagination page={page} setPage={setPage} />
      </div>
    );
}
