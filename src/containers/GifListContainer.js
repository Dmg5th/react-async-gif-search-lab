import React from 'react' 
import DogCard from '../components/DogCard'; 
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {

    state = {
        dogs: []
    }

    componentDidMount(){
        this.makeFetch()
    }

    makeFetch = (query = "dolphins") =>{
        return fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({dogs: data.map( gif => ({url: gif.images.original.url}))})
        })
    }

    render(){
          return (
            <div>
                <GifSearch/>
                {this.state.dogs.map(dogURL => {
                    return <DogCard key={dogURL} dog={dogURL}  />
                })}
                <DogCard />
            </div>
        )
    }
}

export default GifListContainer; 