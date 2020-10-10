import React from 'react';
import './App.css';
import requiests from './requests';
import Row from './components/Row/Row'
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
       title="NETFLIX ORIGINALS"
       fetchUrl={requiests.fetchNetflixOriginals}
       isLargeRow
      />
      <Row title="Tranding Now" fetchUrl={requiests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requiests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requiests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requiests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requiests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requiests.fetchRomanceMovies}/>
      <Row title="Documentaries Movies" fetchUrl={requiests.fetchDocumentariesMovies}/>

    </div>

  );
}

export default App;
