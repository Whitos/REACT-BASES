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
          onClick={() => {
            if (onePokemon.name === "pikachu") {
              alert("pika pikachu !!!");
            }
            setPokemonName(onePokemon.name);
          }}
        >
          {onePokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
