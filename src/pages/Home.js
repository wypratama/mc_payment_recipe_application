import { useFetchRecipes } from '../hooks';
import { RecipeCard, SearchHero, Hero } from '../components';

export default function Home() {
  const { error, loading, data } = useFetchRecipes();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
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
    </div>
  );
}
