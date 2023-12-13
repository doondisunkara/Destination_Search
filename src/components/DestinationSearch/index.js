// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    inputSearch: '',
  }

  changeInputValue = event => {
    this.setState({inputSearch: event.target.value})
  }

  getFilteredList = input => {
    const {destinationsList} = this.props
    return destinationsList.filter(each =>
      each.name.toLowerCase().includes(input.toLowerCase()),
    )
  }

  render() {
    const {inputSearch} = this.state
    const filteredList = this.getFilteredList(inputSearch)
    return (
      <div className="app-container">
        <h1 className="app-title">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            placeholder="Search"
            className="search-ele"
            value={inputSearch}
            onChange={this.changeInputValue}
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="destination-list-container">
          {filteredList.map(each => (
            <DestinationItem key={each.id} destinationDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
