import React, { useRef } from "react";
import './MovieRow.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default ({ title, items }) => {
  const movieRowRef = useRef(null);

  const handleArrowClick = (direction) => {
    const scrollDistance = 200; // Ajuste o valor conforme necessário
    const container = movieRowRef.current;

    if (container) {
      if (direction === "left") {
        container.scrollLeft -= scrollDistance;
      } else if (direction === "right") {
        container.scrollLeft += scrollDistance;
      }
    }
  };

  const handleImageClick = (url) => {
    window.open("https://www.netflix.com/br/", "_blank"); // Abre o URL em uma nova aba
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow__arrow movieRow__arrow--left" onClick={() => handleArrowClick("left")}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow__arrow movieRow__arrow--right" onClick={() => handleArrowClick("right")}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow__list" ref={movieRowRef}>
        {items.results.length > 0 && items.results.map((item, key) => (
          <div className="item_img" key={key} onClick={() => handleImageClick(item.websiteUrl)}>
            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
