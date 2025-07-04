interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
  return (
    <nav>
      {pokemonList.map((onePokemon) => (
        <button
          key={onePokemon.name}
          onClick={() => setPokemonName(onePokemon.name)}
        >
          {onePokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
