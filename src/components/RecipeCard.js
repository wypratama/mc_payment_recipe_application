import { Link } from 'react-router-dom';

export default function RecipeCard(props) {
  return (
    <Link className="card" to={props.href}>
      <div className="left">
        <img src={props.thumbnail} alt="" />
      </div>
      <div className="right">
        <h2> {props.title} </h2>
        <p>
          <b>ingredients:</b> {props.ingredients}{' '}
        </p>
        <span>
          <div>See this Recipe</div>
        </span>
      </div>
    </Link>
  );
}
