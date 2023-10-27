import React from 'react';
import '../Style/Pokedex.css';

function Blue({ setPokemonId }) {
	const pokeRandom = (e) => {
		e.preventDefault();
		const pokemonID = Math.floor(Math.random() * 1018 + 1);
		setPokemonId(pokemonID);
	};
	return (
		<form
			className="pokemon"
			onSubmit={pokeRandom}
		>
			<input
				type="submit"
				className="light is-blue is-medium"
				value=""
			/>
		</form>
	);
}

export default Blue;
