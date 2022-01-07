import React from "react"
import axios from "axios"
import SearchBar from "./SearchBar"
import ImageList from "./ImageList"

class App extends React.Component {
    state = { images: [] }
    
    onSearchSubmit = async(term) => {
        const response = await axios.get("https://api.unsplash.com/search/photos?client_id=ES5V-O7QLqrrMvnI7WbR8t3r91SyuSHslAVy_XKyf00", {
            params: { query: term},
        })
        this.setState({ images: response.data.results})
    }
    
    render(){
        return(
            <div className="ui container" style={{margin:"10px"}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        ) 
    }
}

export default App