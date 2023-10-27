import React, { useState } from 'react';

// Recibimos las funciones que actualizan el estado desde las props
function PokemonForm({ setPokemonId, setLoading, setError }) {
	const [pokemon, setPokemon] = useState('');

	const handleChange = (e) => {
		setPokemon(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (pokemon !== '') {
			// Estara cargando por que hará una petición a la API
			setError(false);
			setLoading(true);
			const pokemonID = window.isNaN(parseInt(pokemon))
				? pokemon.toLowerCase()
				: pokemon;
			setPokemonId(pokemonID);
			setPokemon('');
			return;
		}
		setError(true); //Si manda el formulario vacío, hay un error
	};

	return (
		<form
			className="pokemon-form"
			onSubmit={handleSubmit}
		>
			<input
				className="pokemon-input"
				type="text"
				name="pokemon"
				value={pokemon}
				placeholder="Busca tu pokemon"
				//Actualizas el valor del input cuando el usuario teclea
				onChange={handleChange}
				autoComplete="off"
			/>
			<input
				type="submit"
				className="pokemon-btn"
				value=""
			/>
		</form>
	);
}

export default PokemonForm;
