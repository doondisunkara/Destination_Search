// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationDetails} = this.props
    const {name, imgUrl} = destinationDetails
    return (
      <li className="destination-item">
        <img className="destination-img" src={imgUrl} alt={name} />
        <p className="destination-name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
