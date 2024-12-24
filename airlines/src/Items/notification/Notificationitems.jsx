import React from "react";

export default function Notificationitems({ notificationItems }) {
  console.log(notificationItems);
  console.log(notificationItems.Title);
  return (
    <div>
      {notificationItems.map((Item) => (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>{Item.Title}</Accordion.Header>
            <Accordion.Body>{Item.Description}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
}
