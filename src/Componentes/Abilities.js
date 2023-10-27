import React from 'react';
import '../Style/Pokedex.css';

function Abilities({ item }) {
	return (
		<div className="ability">
			<span>{item.ability.name}</span>
		</div>
	);
}

export default Abilities;
