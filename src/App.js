import React from "react";
import Expectations from "./components/Expectations";
import Interests from "./components/Interests";
import Learn from "./components/Learn";
import Profile from "./components/Profile";
import "./styles.css";

const users = [
  {
    name: "Piero Sulca Sánchez",
    country: "Perú",
    interests: [
      "Tecnología",
      "Deportes",
      "Periféricos",
      "Videojuegos",
      "Animes"
    ],
    learn: [
      "Nuevos idiomas (portugués, francés)",
      "React",
      "Hacer postres",
      "Tocar la guitarra"
    ],
    expectations:
      "Poder crear aplicaciones web con React y además tener las bases necesarias para poder migrar a React Native"
  }
];

export default function App() {
  return (
    <div className="App">
      <Profile data={users} />
      <Interests data={users} />
      <Learn data={users} />
      <Expectations data={users} />
    </div>
  );
}
