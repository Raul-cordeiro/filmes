import React, { useEffect, useState } from 'react';
import tmdb from './tmdb.jsx';
import MovieRow from './components/MovieRow.jsx'; 
import FilmeDestaque from './components/FilmeDestaque.jsx';
import Headersnovo from './components/Hedersnovo.jsx'
import ClickCounter from './components/ClickCounter.jsx'



export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [filmeData, setFilmeData] = useState(null);


  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let Chosen  = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(Chosen.id, 'tv');
      setFilmeData(chosenInfo);
      console.log(chosenInfo)

    };

    loadAll();
  }, []);

  return (
    <div className='page'>
      <Headersnovo/>

      
      {filmeData &&
        <FilmeDestaque item={filmeData}/>
        }

      <section className='listas'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      
      <footer className='footers'>
        <ClickCounter/>

         <div className='whatsapp'>
              <a href='https://api.whatsapp.com/send?phone=5562984687974&text=visitei%20seu%20site%20na%20net;'>WhatApp</a>
          </div>
          <p className='letras'>
              Raul Cordeiro Tecnologias Fale conosco Fone: 62 98468-7974
          </p>
          




      </footer>  
            {movieList.length <= 0 &&
                <div className='loading'>
                   <img src='https://i.gifer.com/origin/36/36527397c208b977fa3ef21f68c0f7b2_w200.gif' alt='load' />
                </div>
              }  
    </div>
  );
}
