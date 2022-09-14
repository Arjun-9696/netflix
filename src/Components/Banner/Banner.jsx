import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import requests from '../../requests';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflix);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (item) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(
        item?.original_title ||
          item?.name ||
          item?.original_name ||
          item?.title ||
          'Resident Evil'
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: 'center center',
        }}
      >
        <div className="banner_content">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button
              className="banner_button"
              onClick={() => handleClick(movie)}
            >
              Play
            </button>
            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_desc">{truncate(movie?.overview, 200)}</h1>
        </div>
        <div className="banner_fadeBottom" />
      </header>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </>
  );
};

export default Banner;
