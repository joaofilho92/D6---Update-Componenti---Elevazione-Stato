import { ListGroup } from "react-bootstrap";

// Table riceve selected NON più dal proprio stato,
// ma da una prop con lo stesso nome (prop.selected) che arriva da fuori (componente App)

// Table riceve due prop:
// selected <-- il valore salvato nello stato di App ("First", "Second", "Third")
// setSelected <-- il metodo che permette a Table di cambiare lo stato di App (nel livello superiore)

const Table = props => (
  <>
    <ListGroup>
      {/* negli onClick andiamo effettivamente a chiamare il metodo setSelected che vive in App.js */}
      <ListGroup.Item onClick={() => props.setSelected("First")}>First</ListGroup.Item>
      <ListGroup.Item onClick={() => props.setSelected("Second")}>Second</ListGroup.Item>
      <ListGroup.Item onClick={() => props.setSelected("Third")}>Third</ListGroup.Item>
    </ListGroup>
    <hr />
    {/* qui leggiamo solamente lo stato di App.js, e ad ogni modifica questo paragrafo subisce un update */}
    <p className="mt-3"> We selected {props.selected || "nothing"}</p>
  </>
);

export default Table;
