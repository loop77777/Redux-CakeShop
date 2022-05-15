import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
import { Card, Button } from "react-bootstrap";
import cake from "../img/cake1.jpg";

function CakeContainer(props) {
  return (
    <div className="cakeContainer">
      <Card style={{ width: "50vw", backgroundColor: "#fcc8a3" }}>
        <Card.Img variant="top" src={cake} />
        <Card.Body>
          <Card.Title>
            <h3>Cake</h3>
          </Card.Title>
          <Card.Text>
            <h3>Number of Cakes - {props.numOfCakes}</h3>
            <input
              type="number"
              placeholder="buy extra(default is 1)"
              className="input"
            />
          </Card.Text>
          <Button variant="dark" onClick={props.buyCake}>
            Buy Cake
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
// we can pass null to connect only if we want to dispatch and to not change the state.
