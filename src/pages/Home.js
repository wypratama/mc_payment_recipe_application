import { useFetchRecipes } from '../hooks';
import { RecipeCard } from '../components';

export default function Home() {
  const { error, loading, data } = useFetchRecipes();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  return (
    <div className="container">
      {data.map((el) => {
        const { title, href, ingredients, thumbnail } = el;
        return (
          <RecipeCard
            thumbnail={thumbnail}
            title={title}
            href={href}
            ingredients={ingredients}
          />
        );
      })}
    </div>
  );
}
