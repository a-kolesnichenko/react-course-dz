import './MovieCard.css';

function MovieCard({posterSrc, title, rating}) {

	return (
        <div className='movie-card'>
          <img className="movie-poster" src={posterSrc} alt={title}/>
          <div className="movie-title">{title}</div>
          <div className="movie-to-chosen"><img className="movie-like" src='/like.png'/> В избранное</div>
          <div className="movie-rating"><img className='movie-star' src='/star.png'/>{rating}</div>
        </div>
	);
}

export default MovieCard;