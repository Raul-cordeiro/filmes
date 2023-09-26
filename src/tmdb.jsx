

const apikey = '537024daae83d56b8a6fc96f2046d210';
const apibase = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {
    const req = await fetch(`${apibase}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais da Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${apikey}`),
        },
        {
          slug: 'trending',
          title: 'Recomendados para você',
          items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${apikey}`),
        },
        {
          slug: 'toprated',
          title: 'Em alta',
          items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${apikey}`),
        },
        {
          slug: 'action',
          title: 'Ação',
          items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${apikey}`),
        },
        {
          slug: 'comedy',
          title: 'Comédia',
          items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${apikey}`),
        },
        {
          slug: 'horror',
          title: 'Terror',
          items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${apikey}`),
        },
        {
          slug: 'romance',
          title: 'Romance',
          items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${apikey}`),
        },
        {
          slug: 'documentary',
          title: 'Documentário',
          items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${apikey}`),
        },
      ];
    },
    getMovieInfo: async (movieId, type) => {
      let info = {};
    
      if (movieId) {
        switch (type) {
          case 'movie':
            info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${apikey}`);
            break;
          case 'tv':
            info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${apikey}`);
            break;
          default:
            info = null;
            break;
        }
      }
    
      return info;
    }
}


