import React from "react";

export default function Learn({ data }) {
  return (
    <div className="Expectations">
      <h2>Expectativas</h2>
      {data.map((u, i) => (
        <>
          <p key={i}>{u.expectations}</p>
        </>
      ))}
    </div>
  );
}
