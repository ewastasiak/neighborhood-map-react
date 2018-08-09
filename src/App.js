import React, { Component } from 'react';
import MapContainer from './components/MapContainer.js'
import SearchList from './components/SearchList.js'
import CastlesData from './data/castles.json';
import Footer from './components/Footer.js'
// import escapeRegExp from 'escape-string-regexp'

//Display alert if the map does not load
window.gm_authFailure = () => {
  alert('Google Map failed to load :(');
  // return;
}


class App extends Component {


  state = {
    // error: false,

    activeMarker: {},

    selectedPlace: {},
    showingInfoWindow: false,

    //Query and list will be used both by searchlist and MapContainer markers
    listOfCastles: CastlesData,
    // listOfMarkers: [],


    pictures: [],
    flickrOwner: [],

//TODO:
  // latlngPosition: CastlesData

  }



  filterCastles = (query) => {


  // Reset to full list of castles if query is empty
    if (!query) {
      return this.setState({ listOfCastles: CastlesData })
    }

    console.log(query);
     console.log(this.state.listOfCastles);
    // filter list of castles according to query
    const filteredCastlesData = CastlesData.filter(castle => castle.name.toLowerCase().includes(query.toLowerCase()))
    this.setState ({
      listOfCastles: filteredCastlesData,
      // Prevent infowindow and selected marker from showing during search
      showingInfoWindow: false,
      selectedPlace: {}
    })

  }


  //Marker click behavior
  onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true,
          // position: latlng
        });


 //On button click SHOULD HAPPEN: infowindow + marker animation
  onButtonClick = (castleName) => {
    const targetCastle = CastlesData.filter(castle=>castle.name === castleName)[0]
    // ??
    const selectedPlace = {title: castleName}

    this.onMarkerClick(selectedPlace, targetCastle)
  }


// SHOULD close the infowindow and unselect marker
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: {}
        // activeMarker: null
      })
    }
  }



  onImgError = () => {
    // this.setState({ error: true })
    alert("Some Flickr data failed to load");
    // this.setState({ error: false })
    // return;

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
      allImages[castle.name] = (<img className="info-pic" key={pic.title} alt={pic.title} src={srcPath}></img>);
      allOwners[castle.name] = pic.owner;
    })
    // .catch((photosResults) => {return (alert("An image failed to load"))})


  })

  // when all fetches are finished, store images and authors in the state
  Promise.all(allFetches)
    .then(() => this.setState ({
    pictures: allImages,
    flickrOwner: allOwners
  }))
  .catch((allFetches) => {this.onImgError()})


}


  //Render the page with all components in grid
render() {

  //TODO:Delete in build
  console.log(`This is a rerender and an array with ${this.state.listOfCastles.length} castles`);
  console.log(
    CastlesData.map(castle => {
      return <li key={this.index}>{castle.name}</li>;
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
              filterCastles={this.filterCastles}
              selectedPlace={this.state.selectedPlace}
              

              onButtonClick={this.onButtonClick}
             />
          </nav>

          <main className="item item-3">
            <MapContainer
              fetchedPics={this.state.pictures}
              flickrOwner={this.state.flickrOwner}
              listOfCastles={this.state.listOfCastles}
              selectedPlace={this.state.selectedPlace}
              onMarkerClick={this.onMarkerClick}
              onMapClick={this.onMapClick}
              onInfoWindowClose={this.onInfoWindowClose}
              filterCastles={this.filterCastles}
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
