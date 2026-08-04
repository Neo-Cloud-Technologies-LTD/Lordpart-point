import StatItem from './StatItem';
import styles from './Stats.module.css';

const statsData = [
	{ icon: '📊', value: '350+', label: 'Projects Completed' },
	{ icon: '👥', value: '120+', label: 'Professional Experts' },
	{ icon: '⚙️', value: '10+', label: 'Years Experienced' },
	{ icon: '📍', value: '5', label: 'Regional Offices' },
	{ icon: '🛡️', value: '98%', label: 'Client Satisfaction' },
];

// component for displaying the stats bar
function Stats() 
{
	return (
		<div className={styles.statsBar}>
			{statsData.map((stat, index) => (
			<div key={index} style={{ display: 'flex', alignItems: 'center' }}>
				<StatItem icon={stat.icon} value={stat.value} label={stat.label} />
				{index < statsData.length - 1 && <div className={styles.divider} />}
			</div>
			))}
		</div>
	);
}
 
export default Stats;