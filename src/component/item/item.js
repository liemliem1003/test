import React from 'react'
import './item.css'

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
function Item(props){
  return(
    <div className="item">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <img src={props.img}/>
      <div>{props.name}</div>
      <div>{numberWithCommas(props.price)}</div>
      <div style={{fontSize:"10px", width:"80%", margin:"auto"}}>{props.details}</div>
      <Rating />
      <button className="add-to-cart-btn" onClick={props.onClick}>ADD TO CART</button>
    </div>
  )
}
export default Item
const Star = props => {
  const {filled,value, onClick} = props
  const starClick = () => {
    onClick(value)
  }

  return (
    <span className="fa fa-star" style={{color:filled ? "gold" : "black", width:"5px"}} onClick={starClick}></span>
  )
}

class Rating extends React.Component{
  state = {
    rate: this.props.rate
  }
  onStarClick = star => {
    this.setState({rate: star})
  }
  render(){
    const {rate} = this.state
    return (
      <div className="group-stars">
        <Star value={1} filled={1 <= rate} onClick={this.onStarClick}/>
        <Star value={2} filled={2 <= rate} onClick={this.onStarClick}/>
        <Star value={3} filled={3 <= rate} onClick={this.onStarClick}/>
        <Star value={4} filled={4 <= rate} onClick={this.onStarClick}/>
        <Star value={5} filled={5 <= rate} onClick={this.onStarClick}/>
      </div>
    )
  }
}
