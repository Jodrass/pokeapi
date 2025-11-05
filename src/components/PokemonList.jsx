// src/components/PokemonList.jsx
import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
                const data = await res.json();

                // Cada "pokemon" tiene una URL propia, necesitamos otra llamada por cada uno
                const detailedPokemons = await Promise.all(
                    data.results.map(async (p) => {
                        const res = await fetch(p.url);
                        return await res.json();
                    })
                );

                setPokemons(detailedPokemons);
                setLoading(false);
            } catch (error) {
                console.error("Error cargando Pokémon:", error);
            }
        };

        fetchPokemons();
    }, []);

    if (loading) return <p>Cargando pokemons...</p>;

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "16px",
            padding: "16px"
        }}>
            {pokemons.map((p) => (
                <PokemonCard
                    key={p.id}
                    name={p.name}
                    image={p.sprites.front_default}
                    types={p.types}
                />
            ))}
        </div>
    );
};

export default PokemonList;
