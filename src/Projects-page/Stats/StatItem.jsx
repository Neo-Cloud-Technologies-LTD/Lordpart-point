import styles from './Stats.module.css';

// component for each stat item
function StatItem({ icon, value, label }) 
{
	return (
		<div className={styles.statItem}>
			<div className={styles.iconCircle}>{icon}</div>
			<h2 className={styles.value}>{value}</h2>
			<p className={styles.label}>{label}</p>
		</div>
	);
}

export default StatItem;