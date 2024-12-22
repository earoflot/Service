import React from "react";
import Notification from "../../Pages/Notifications/Notification.jsx";

export default function Notificationitems({ notificationItems }) {
  return (
    <div>
      {notificationItems.map((Item) => (
        <Notification Title={Item.Title} Description={Item.Description} />
      ))}
    </div>
  );
}
