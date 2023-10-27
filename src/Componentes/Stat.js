import React from 'react';
import '../Style/Pokedex.css';

function Stat({ item }) {
	return (
		<li className="pokemon-stat">
			<span className="stat-name">
				<b>{item.stat.name} </b>
			</span>
			<span>{item.base_stat}</span>
		</li>
	);
}

export default Stat;
