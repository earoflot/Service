import Accordion from "react-bootstrap/Accordion";

function Notification({ Title, Description }) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{Title}</Accordion.Header>
        <Accordion.Body>{Description}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Notification;
