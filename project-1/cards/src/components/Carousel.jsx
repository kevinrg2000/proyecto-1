import { Card } from "./Card";
import "../styles/Carousel.css";
import { useState } from "react";

export const Carousel = () => {
  const [flexWidth, setFlexWidth] = useState("");
  const [width, setWidth] = useState("10px");
  const [idSelected, setIdSelected] = useState(0);
  const arrayImg = [
    {
      src: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      name: "Explore The World",
    },
    {
      src: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      name: "Wild Forest",
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
      name: "Sunny Beach",
    },
    {
      src: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      name: "City on Winter",
    },
    {
      src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      name: "Mountains- Clouds",
    },
  ];

  const grow = (e) => {
    setIdSelected(parseInt(e.target.id));
  };

  return (
    <div className="carousel">
      {arrayImg.map(({ src, name }, key) => {
        return (
          <Card
            src={src}
            id={key}
            name={key === idSelected ? name : null}
            key={key}
            grow={grow}
            width={key === idSelected ? "1000px" : "10px"}
          />
        );
      })}
    </div>
  );
};
