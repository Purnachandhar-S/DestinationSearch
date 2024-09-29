// Write your code here

// import {Component} from 'react'

// class DestinationItem extends Component {
//   render() {
//     const {destination} = this.props

//     return (
//       <div>
//         <p> {destination.name}</p>
//       </div>
//     )
//   }
// }

// export default DestinationItem

const DestinationItem = ({destination}) => {
  const {name, imgUrl} = destination
  return (
    <li>
      <img src={imgUrl} alt={name} style={{width: '100px', height: '100px'}} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
