import React, { useState } from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";
import { Card, Button } from "react-bootstrap";
import icecream from "../img/icecream.jpg";

function IceCreamContainer(props) {
  const [number, setnumber] = useState(1);
  return (
    <div className="cakeContainer">
      <Card style={{ width: "50vw", backgroundColor: "#FCC5CB" }}>
        <Card.Img variant="top" src={icecream} />
        <Card.Body>
          <Card.Title>
            <h3>Ice Creams</h3>
          </Card.Title>
          <Card.Text>
            <h3>Number of IceCreams - {props.numOfIceCreams}</h3>
            <input
              type="number"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
              placeholder="buy extra(default is 1)"
              className="input"
            />
          </Card.Text>
          <Button variant="dark" onClick={()=>props.buyIceCream(number)}>
            Buy {number} Icecream
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: (number) => dispatch(buyIceCream(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
