import styles from './MovieCard.module.css';

function MovieCard({posterSrc, title, rating}) {

	return (
        <div className={styles['movie-card']}>
          <img className={styles['movie-poster']} src={posterSrc} alt={title}/>
          <div className={styles['movie-title']}>{title}</div>
          <div className={styles['movie-to-chosen']}><img className={styles['movie-like']} src='/like.png'/> В избранное</div>
          <div className={styles['movie-rating']}><img className={styles['movie-star']} src='/star.png'/>{rating}</div>
        </div>
	);
}

export default MovieCard;