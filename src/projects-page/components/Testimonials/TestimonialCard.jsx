import styles from './Testimonials.module.css';

// component for each testimonial card
function TestimonialCard({ quote, name, title }) 
{
	return (
		<div className={styles.card}>
			<div className={styles.stars}>★★★★★</div>
			<p className={styles.quote}>{quote}</p>
			<h4 className={styles.name}>{name}</h4>
			<span className={styles.title}>{title}</span>
		</div>
	);
}

export default TestimonialCard;