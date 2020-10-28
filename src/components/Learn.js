import React from "react";

export default function Learn({ data }) {
  return (
    <div className="Learn">
      <h2>Cosas que me gustaría aprender</h2>
      {data.map((u) => u.learn.map((l, i) => <p key={i}>{l}</p>))}
    </div>
  );
}
