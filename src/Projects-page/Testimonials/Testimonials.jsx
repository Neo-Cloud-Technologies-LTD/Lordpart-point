import TestimonialCard from './TestimonialCard';
import styles from './Testimonials.module.css';

const testimonialsData = [
	{
		quote: 'LORDPART POINT exceeded our expectation from start to finish. Their professionalism and attention to detail are unmatched.',
		name: 'Prisca Adeyemi',
		title: 'MD.SunGate Properties',
	},
	{
		quote: 'They delivered our projects on time. Within budget, and to the highest quality standards. Highly recommended!',
		name: 'Emeka Samuel',
		title: 'CEO, Rosmally Group',
	},
	{
		quote: 'A reliable and innovative construction partner. Their team is simply outstanding.',
		name: 'Aisha Mohammed',
		title: 'Director.M. Enterprises',
	},
];

// component for displaying each testimony
function Testimonials() 
{
	return (
		<section className={styles.section}>
			<h3 className={styles.heading}>WHAT OUR CLIENTS SAY</h3>
			<div className={styles.grid}>
			{testimonialsData.map((t, index) => (
				<TestimonialCard
				key={index}
				quote={t.quote}
				name={t.name}
				title={t.title}
				/>
			))}
			</div>
		</section>
	);
}

export default Testimonials;