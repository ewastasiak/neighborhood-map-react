import React, { Component } from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './components/MapContainer.js'
import SearchList from './components/SearchList.js'
import CastlesData from './data/castles.json';
import Footer from './components/Footer.js'
// import escapeRegExp from 'escape-string-regexp'

//Display alert if the map does not load
window.gm_authFailure = () => {
  alert('Google Map failed to load :(');
}


class App extends Component {


  state = {
    activeMarker: {},

    selectedPlace: {},
    showingInfoWindow: false,

    //Query and list will be used both by searchlist and MapContainer markers
    listOfCastles: CastlesData,
    filteredCastlesData: [],
    // listOfMarkers: [],
    query: '',

    pictures: [],
    flickrOwner: []
  }

// updateFilter = query => {
//   this.setState({ query: query })
// }

  filterCastles = (query) => {
  // Reset to full list of castles if query is empty
    if (!query) {
      return this.setState({ listOfCastles: CastlesData })
    }
    // filter list of castles according to query
    const filteredCastlesData = this.state.listOfCastles.filter(castle => castle.name.toLowerCase().includes(query.toLowerCase()))
    this.setState ({ listOfCastles: filteredCastlesData })
  }


  //Marker click behavior
  onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true,
        });


 //On button click SHOULD HAPPEN: infowindow + marker animation
  onButtonClick = (props, button, marker, e) => {

    this.setState({
      // selectedPlace: listOfCastles.castle.latlng,
      showingInfoWindow: true
    })

    alert("Im ALIIIIIVE");
    this.onMarkerClick();

  }


// SHOULD close the infowindow and unselect marker
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null

      })
    }
  };


  // Third idea
  // Image loading error placeholder
  onImgError() {
    alert("THere error be wut");
  }


componentDidMount() {


  // create an object {castle.name: imageUI}
  let allImages = {};

  let allOwners = {};

  // store all fetch requests in an array of promises
  let allFetches = CastlesData.map(castle => {
    return fetch(castle.flickr)
    .then((response) => {
      return response.json();
    })
    .then((photosResults) => {
      let pic = photosResults.photos.photo[0];
      if(!pic) return;
      let srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;

      // Second idea
      // const fallbackImg = './img/kappa.png';
      // allImages[castle.name] = (<img className="info-pic" alt={pic.title} src={srcPath} onError={srcPath="<p>there was a bork</p>"}></img>);

      // first idea
      // allImages[castle.name] = (<img className="info-pic" alt={pic.title} src={srcPath} ref={img => this.img = img} onError={() => this.img.src ="../img/kappa.png"}></img>);
      allImages[castle.name] = (<img className="info-pic" alt={pic.title} src={srcPath} onError={this.onImgError}></img>);


  //cleanish backup
      // allImages[castle.name] = (<img className="info-pic" alt={pic.title} src={srcPath} onError={require('./img/kappa.png')}></img>);


      allOwners[castle.name] = pic.owner;
    })
  })

  // when all fetches are finished, store images and authors in the state
  Promise.all(allFetches)
    .then(() => this.setState ({
    pictures: allImages,
    flickrOwner: allOwners
  }))


}

// //ADD WIKIPEDIA LATER
// //   Castles.map(castle => {
// //     return (
// //
// // fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts&titles=${castle.name}&exintro=1`)
// //   .then(function(response) {
// //     return response.json();
// //   })
// //   .then(function(p) {
// //     // alert(JSON.stringify(p))
// //     let pictureArr/wikiExtract = resultArticle.query.pages[Object.keys(resultArticle.query.pages[0]].extract;
// //
// //
// //       // let srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
// //       // return (
// //       //   <img className="info-pic" alt={castle.name} src={srcPath}></img>
// //       // )
// //
// //
// //     })
// //     this.setState({ wiki: wikiExtract })
// //   }.bind(this))
// //
// //   )})
//
//
//
//   // getWiki = (listOfCastles) => {
//   //
//   // let wikiEntry = [];
//   //
//   // fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts&titles=${listOfCastles.name}&exintro=1`)
//   // .then(response => {return response.json()})
//   // .then(responseEntry => {
//   //   let entry = response.query.pages[Object.keys(responseEntry.query.pages)[0]].extract;
//   //   wikiEntry.push(entry)
//   // })
//   // //catch errors?
//   // this.setState({WikiWindow: wikiEntry})
//   //
//   // }


  //Render the page with all components in grid
render() {

  //TODO:Delete in build
  console.log(`This is a rerender and an array with ${this.state.listOfCastles.length} castles`);
  console.log(
    CastlesData.map(castle => {
      return <li key={castle.place_id}>{castle.name}</li>;
    })
  );

    return (
      <div className="App">


        <div className="grid">

          <header role="banner" className="item item-1">
            <h1>Famous Transylvanian Castles</h1>
          </header>

          <nav className="item item-2">
            <SearchList
              listOfCastles={this.state.listOfCastles}
              filterCastles={this.filteredCastlesData}
              query={this.state.query}
              selectedPlace={this.state.selectedPlace}


              onButtonClick={this.onButtonClick}
             />
          </nav>

          <main className="item item-3">
            <MapContainer
              fetchedPics={this.state.pictures}
              flickrOwner={this.state.flickrOwner}
              onImgError={this.onImgError}
              query={this.state.query}
              listOfCastles={this.state.listOfCastles}
              selectedPlace={this.state.selectedPlace}
              onMarkerClick={this.onMarkerClick}
              onMapClick={this.onMapClick}
              onInfoWindowClose={this.onInfoWindowClose}

              activeMarker={this.state.activeMarker}
              showingInfoWindow={this.state.showingInfoWindow}
            />
          </main>

          <Footer />

        </div>


      </div>

    );


  }


}

export default App


// activeMarker: {this.state.activeMarker}
// selectedPlace: {this.state.selectedPlace}
// showingInfoWindow: {this.state.showingInfoWindow}
// wikiEntry: {this.state.wikiEntry}
