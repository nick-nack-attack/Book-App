import React, { Component } from 'react';
// import './searchBar.css';
// import Filter from './filter/filter';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '', // Query
            filter: 'partial', // Book type
            printType: 'all', // Print type
            apiKey: 'AIzaSyDpP3dOokDwXuXtJobKMIr8WjEw1Z_fcps'
        };
    }

    changeSearchTerm(searchTerm) {
        this.props.setSearchTerm(searchTerm);
    }

    changePrintType(printType) {
        this.props.setPrintType(printType);
    }

    changeBookType(bookType) {
        if(bookType === 'all') {
            this.props.setBookType(null)
        } else {
            this.props.setBookType(bookType);
        }
    }

    generateSearchUrl(currentState) {
        console.log(' = = = generateSearchUrl ran = = = ');
        const urlBase = 'https://www.googleapis.com/books/v1/volumes?';
        const queryItems = Object.keys(this.currentState).map( key => encodeURIComponent(key) + '=' + encodeURIComponent(currentState[key]) )
        return urlBase + queryItems.join('&') 
    }

    handleSubmit(e) {
        console.log(' = = = handleSubmit ran = = = ')
        // Prevent the default functioning
        e.preventDefault();
        // Generate html
        this.props.handleSubmit();
    }
    
    render() {

        return(
            <div className='search-bars'>
                <div className='search-input-bar'>
                <form
                    id='main-submit-form'
                    onSubmit={ e => this.handleSubmit(e) }>
                
                    <label
                        htmlFor='search'
                        >
                                Search:
                    </label>
                    <input
                        type='text'
                        name='search'
                        id='seach'
                        placeholder='ex. The Great Gatsby'
                        value={ this.state.search }  
                        onChange={ e => this.changeSearchTerm(e.target.value) }
                        />
                    <input
                        name='submit'
                        type='submit'
                        value='submit' 
                    />  
                        <label htmlFor='printType'>Print Type: </label>
                        <select
                            id='printType'
                            name='printType'
                            onChange={ e => this.changePrintType( e.target.value ) }
                            >
                                <option value='all'> All </option>
                                <option value='books'> Books </option>
                                <option value='magazines'> Magazines </option>

                        </select>

                        <label> Book Type: </label>
                        <select
                            id='bookType'
                            name='bookType'
                            onChange={ e => this.changeBookType( e.target.value ) }
                        >
                            <option value='all' > No Filter </option>
                            <option value='partial'> Partial </option>
                            <option value='full'> Full </option>
                            <option value='free-ebooks'> Free eBooks </option>
                            <option value='paid-ebooks'> Paid eBooks </option>
                            <option value='ebooks'> eBooks </option>
                        </select>

                </form>
                </div>
                <div className='search-filter-bar'>
                    
                </div>
            </div>
        )
    }
}

export default SearchBar;