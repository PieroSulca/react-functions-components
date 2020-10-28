import React from "react";

export default function Profile({ data }) {
  return (
    <div className="Profile">
      {data.map((u, i) => (
        <>
          <h2 key={i}>{u.name}</h2>
          <p key={i}>{u.country}</p>
        </>
      ))}
    </div>
  );
}
