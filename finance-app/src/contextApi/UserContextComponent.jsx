/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import warning from "../assets/warning.svg";
import greenIcon from "../assets/green.svg";
import grayIcon from "../assets/grayIcon.svg";

const notificationArray = [
  {
    id: 0,
    icon: grayIcon,
    number: 3,
    wariningTitle: "Limited Support on Holidays:",
    NotificationBody:
      "Our support will be limited during the holiday period. Expect delayed responses.",
  },
  {
    id: 1,
    icon: greenIcon,
    number: 2,
    wariningTitle: "Note",
    NotificationBody:
      "Introducing our new community forum! Connect with fellow users, share insights, and get answers to your questions.",
  },
  {
    id: 2,
    icon: warning,
    number: 1,
    wariningTitle: "Account Security Alert",
    NotificationBody:
      " Suspicious login detected. Verify recent activity to secure your account.",
  },
  {
    id: 3,
    icon: grayIcon,
    number: 2,
    wariningTitle: "Limited Support on Holidays:",
    NotificationBody:
      "Our support will be limited during the holiday period. Expect delayed responses.",
  },
  {
    id: 4,
    icon: warning,
    number: 1,
    wariningTitle: "Account Security Alert",
    NotificationBody:
      " Suspicious login detected. Verify recent activity to secure your account.",
  },
];

export const userContext = createContext();

export default function UserContextComponent({ children }) {
  const [array, setArray] = useState(notificationArray);
  const arrayLength = array.length;
  const [filteredArray, setFIlteredArray] = useState(array);

  function deleteItem(id) {
    setFIlteredArray((prevArray) => {
      return prevArray.filter((item) => item.id !== id);
    });
  }

  const contextValue = {
    array,
    deleteItem,
    arrayLength,
    setArray,
    filteredArray,
    setFIlteredArray,
  };
  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
}
