import React, { useContext, useState, useEffect } from "react";
import { TodoContext } from "./TodoContext";

const Notification = () => {
  const { notification } = useContext(TodoContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (notification) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 1000); 
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    visible && (
      <div className="notification"
      >
        {notification}
      </div>
    )
  );
};

export default Notification;
