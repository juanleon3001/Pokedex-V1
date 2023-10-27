import React from 'react';
import '../Style/Pokedex.css';

function Green({ setPokemonId, pokemonID }) {
	const pokePrevius = (e) => {
		e.preventDefault();
		const id = pokemonID === 1 ? 1 : pokemonID - 1;
		setPokemonId(id);
	};
	return (
		<form
			className="pokemon"
			onSubmit={pokePrevius}
		>
			<input
				type="submit"
				className="light is-green is-large"
				value=""
			/>
		</form>
	);
}

export default Green;
