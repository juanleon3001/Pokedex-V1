import React from 'react';
import Abilities from './Abilities';
import LoadingPokemon from '../img/loading.gif';
import Type from './Type';
import '../Style/Pokedex.css';

function Description({ pokemon, loading }) {
	return (
		<div>
			<h1 className="descriptionTittle">Descripcion</h1>

			<div>
				{!pokemon || loading ? (
					<img
						src={LoadingPokemon}
						alt="Aún no hay ningun pokemon"
						className="pokedex-no-screen"
					/>
				) : (
					<div>
						<h2 className="type">Type:</h2>
						{pokemon.types.map((pokeType) => (
							<Type
								key={pokeType.type.name}
								pokeType={pokeType}
							/>
						))}
						<h2 className="abilities">Abilities</h2>
						{pokemon.abilities.map((item) => (
							<Abilities
								key={item.ability.name}
								item={item}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default Description;
