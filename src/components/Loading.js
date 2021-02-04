import loadingImage from '../img/loading.svg';

export default function Loading() {
  return (
    <div className="loading">
      <img src={loadingImage} alt="loading" />
    </div>
  );
}
