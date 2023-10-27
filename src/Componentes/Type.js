import React from 'react';
import '../Style/Pokedex.css';

function Type({ pokeType }) {
	return (
		<section>
			<div className="textDescription">
				<span>{pokeType.type.name}</span>
			</div>
		</section>
	);
}

export default Type;
