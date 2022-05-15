import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCupcake } from "../redux";
import { Card, Button } from "react-bootstrap";
import cupcake from "../img/cupcake.jpg";

function CupCakeContainer(props) {
  const [number, setnumber] = useState(1);
  return (
    <div className="cakeContainer">
      <Card style={{ width: "50vw", backgroundColor: "#C3996F" }}>
        <Card.Img variant="top" src={cupcake} />
        <Card.Body>
          <Card.Title>
            <h3>Cupcake</h3>
          </Card.Title>
          <Card.Text>
            <h3>Number of Cupcakes - {props.numOfCupcakes}</h3>
            <input
              type="number"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
              placeholder="buy extra(default is 1)"
              className="input"
            />
          </Card.Text>
          <Button variant="dark" onClick={() => props.buyCupcake(number)}>
            Buy {number} Cupcake
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCupcakes: state.cupCake.numOfCupcakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCupcake: (number) => dispatch(buyCupcake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CupCakeContainer);
