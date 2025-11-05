// src/components/PokemonCard.jsx
import React from "react";

const PokemonCard = ({ name, image, types }) => {
    return (
        <div className="pokemon-card" style={{
            border: "2px solid #ddd",
            borderRadius: "12px",
            padding: "16px",
            textAlign: "center",
            width: "160px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}>
            <img src={image} alt={name} style={{ width: "96px", height: "96px" }} />
            <h3 style={{ textTransform: "capitalize" }}>{name}</h3>
            <div>
                {types.map((t, i) => (
                    <span key={i} style={{
                        margin: "2px",
                        padding: "4px 8px",
                        borderRadius: "8px",
                        backgroundColor: "#eee",
                        textTransform: "capitalize",
                        fontSize: "0.8rem"
                    }}>
                        {t.type.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PokemonCard;
