export default function RecipeCard(props) {
  return (
    <div className="card">
      <div className="left">
        <img src={props.thumbnail} alt="" />
      </div>
      <div className="right">
        <h2> {props.title} </h2>
        <p>ingredients: {props.ingredients} </p>
        <span> Link </span>
      </div>
    </div>
  );
}
