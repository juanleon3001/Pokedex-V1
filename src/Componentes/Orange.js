import React from 'react';
import '../Style/Pokedex.css';

function Orange({ setPokemonId, pokemonID }) {
	const pokeNext = (e) => {
		e.preventDefault();
		const id = pokemonID === 1 ? 1 : pokemonID + 1;
		setPokemonId(id);
	};
	return (
		<form
			className="pokemon"
			onSubmit={pokeNext}
		>
			<input
				type="submit"
				className="light is-orange is-large"
				value=""
			/>
		</form>
	);
}

export default Orange;
