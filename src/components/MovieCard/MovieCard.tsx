import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';
import { type MovieCardProps } from './MovieCard.props';

function MovieCard({ imdbID, posterSrc, title, year }: MovieCardProps) {
  return (
    <Link to={`/movie/${imdbID}`} className={styles['link']}>
      <div className={styles['movie-card']}>
        <img className={styles['movie-poster']} src={posterSrc} alt={title} />
        <div className={styles['movie-title']}>{title}</div>
        <div className={styles['movie-to-chosen']}><img className={styles['movie-like']} src='/like.png' /> В избранное</div>
        <div className={styles['movie-year']}>{year}</div>
      </div>
    </Link>
  );
}

export default MovieCard;
