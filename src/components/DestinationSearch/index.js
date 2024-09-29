// all thanks to chatgpt but honesty spend lot of time(2.5 hours ) to learn and understand the code.
//
import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const filteredDestinations = destinationsList.filter(destination =>
      destination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div style={{textAlign: 'center'}}>
        <h1>Destination Search</h1>
        {/* Input container with search icon inside */}
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            width: '300px',
          }}
        >
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            placeholder="Search Destination"
            style={{
              width: '100%',
              padding: '10px 40px 10px 10px', // Padding for the icon space
              fontSize: '16px',
            }}
          />
          {/* Search icon inside input */}
          <img
            src="https://image.shutterstock.com/image-vector/search-icon-vector-260nw-1304874110.jpg" // Example search icon
            alt="search icon"
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '20px',
              height: '20px',
            }}
          />
        </div>
        <ul style={{listStyleType: 'none'}}>
          {filteredDestinations.map(destination => (
            <DestinationItem key={destination.id} destination={destination} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
