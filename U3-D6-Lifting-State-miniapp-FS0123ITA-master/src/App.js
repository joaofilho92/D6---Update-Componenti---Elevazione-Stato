import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Details from "./components/Details";
import Table from "./components/Table";

class App extends Component {
  state = {
    selected: null
  };

  // this.setState() deve avvenire nello stesso componente (o livello) dove esiste lo stato che vogliamo modificare

  // di conseguenza abbiamo creato una funzione che aspetterà di essere chiamata (internamente ad un componente figlio)
  // e nel momento in cui sarà chiamata, riceverà un valore come argomento, e lo userà per modificare lo stato con esso
  setSelected = value => {
    this.setState({ selected: value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Table selected={this.state.selected} setSelected={this.setSelected} />
                {/* nella prop setSelected stiamo passando la REFERENZA al metodo (o funzione) che verrà poi chiamata dentro a Table

                tramite un onClick che scatenerà props.setSelected(valore)*/}
              </Col>
              <Col>{this.state.selected !== "First" && <Details selected={this.state.selected} />}</Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
