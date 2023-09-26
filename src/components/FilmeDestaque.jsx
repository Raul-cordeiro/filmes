import React from "react";
import "./FilmeDestaque.css"


export default ({ item }) => { // Desestruturação para acessar a propriedade 'item'
    
let firtsDate = new Date(item.first_air_date);
let genres = [];
for (let i in item.genres) {
    genres.push(item.genres[i].name);
}
    let description =item.overview;
    if (description.length >150) {
        description=description.substring(0, 150)+'...';
    }




    return (
        <section className="featured" style={{
            backgroundSize:'cover',
            backgroundPosition: 'center', 
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="vertical">
                <div className="horizontal">
                    
                    <div className="name">{item.name}</div>
                    <div className="info">
                        <div className="points">{item.vote_average} Pontos</div>
                        <div className="years">{firtsDate.getFullYear()}</div>
                        <div className="seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div> 
                        <div className="description">{item.description}</div>
                    </div>
                    
                    
                    <div className="buttons">
                        <a href= {`/watch/${item.id}`} className="buttonAssistir">Assistir</a>
                        <a href={`/list/add${item.id}`}className="buttonMinhaLista" >+ Minha Lista</a>
                    </div>
                    <div className="genres"><strong>Gêneros: </strong>{genres.join(' ,')}</div>
                
                        
                </div>
                
            </div>
        </section>
    );
}
