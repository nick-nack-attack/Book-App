import React, { Component } from 'react';
// import './App.css';
import Header from './header/header';
import SearchBar from './searchBar/searchBar';
// import Filter from './filter/filter'; — going to nest this in SearchBar Compobebt
import Results from './results/results';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // QUERY OPTIONS / PROPERTIES
      searchTerm:'',
      printType:'all',
      bookType: null,
      // API RESOURCES
      apiKey: 'AIzaSyDpP3dOokDwXuXtJobKMIr8WjEw1Z_fcps',
      baseUrl: 'https://www.googleapis.com/books/v1/volumes',
      // API RESULTS
      books: []
    };
  }

  componentDidMount() {
    console.log(' = = = componentDidMount ran = = = ')

    

    
  }

  makeApiCall( searchQuery ) {
    
    fetch( searchQuery )
      .then( res => {
        if(!res.ok) {
          throw new Error('Something went wrong with the dang fetch!')
        }
        return res;
      })
      .catch( res => res.json() )
      .then ( data => {
        this.setState({
          books: data
        });
      })
      .catch( err => {
        console.log('This went wrong: ' + err)
      })
  }

  makeCorsLink( formattedUrl ) {
    return `https://cors-anywhere.herokuapp.com/${formattedUrl}`
  }

  generateFormattedUrl() {
    const urlBase = this.state.baseUrl + '?';
    const search = 'q=' + this.state.searchTerm + '&'; // Query
    const filter = (this.state.bookType === null) ? '' : 'filter=' + this.state.bookType + '&'; // Book type
    const printType = 'printType=' + this.state.printType + '&';// Print type
    const apiKey = 'apiKey=' + this.state.apiKey;// Api Key
    const url = urlBase + search + filter + printType + apiKey;
    console.log('This is the formatted URL: ' + url)
    return url;
  }

  handleSubmit() {

    const formattedUrl = this.generateFormattedUrl();
    const corsUrl = this.makeCorsLink ( formattedUrl )
    this.makeApiCall( corsUrl );

  }

  setSearchTerm(searchTerm) {
    console.log('setSearchTerm ran!...')
    this.setState({
      searchTerm
    })
  }

  setPrintType(printType) {
    console.log('printType ran with the argument: ' + printType)
    this.setState({
      printType
    })
  }

  setBookType(bookType) {
    console.log('setBookType ran with: ' + bookType)
    this.setState({
      bookType
    })
  }

 render() {

  return (
    <div className='App'>
      <Header/>
      <SearchBar
        setSearchTerm = { selected => this.setSearchTerm(selected) }
        setPrintType = { selected => this.setPrintType( selected ) }
        setBookType = { selected => this.setBookType( selected ) }
        handleSubmit = { () => this.handleSubmit() }
      />
      <p>This is print type !</p>
      [ {this.state.printType} ]
      <p>This is a book type !!</p>
      [ {this.state.bookType} ]
      <p>Here is the returned json: {this.state.books.toString()} </p>
      <Results 
        bookResults = { this.state.books } />
    </div>
  );
 }
}

export default App;