import React from "react";

export default function Interests({ data }) {
  return (
    <div className="Interests">
      <h2>Intereses</h2>
      {data.map((u) => u.interests.map((i, ind) => <p key={ind}>{i}</p>))}
      {/* <h2>Intereses</h2>
      <p>Tecnología</p>
      <p>Deportes</p>
      <p>Periféricos</p>
      <p>Videojuegos competitivos</p>
      <p>Animes</p> */}
    </div>
  );
}
