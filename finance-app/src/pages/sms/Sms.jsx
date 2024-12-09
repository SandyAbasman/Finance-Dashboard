import { useContext } from "react";
import Notification from "../../Component/Notification";
import Select from "../../Component/Select";
import { userContext } from "../../contextApi/UserContextComponent";

export default function Sms() {
  const { array, deleteItem } = useContext(userContext);

  return (
    <div className="w-full h-auto px-[2rem] py-[1rem] flex flex-col justify-start items-start gap-2 ">
      <div className="w-full h-auto flex flex-row justify-end items-center ">
        <Select />
      </div>
      <div className="w-full h-auto flex flex-col justify-start items-start py-[1rem] px-[1rem] gap-6">
        {array.map(function (item, index) {
          return (
            <Notification
              key={index}
              icon={item.icon}
              colorId={item.number}
              wariningTitle={item.wariningTitle}
              NotificationBody={item.NotificationBody}
              deleteItem={deleteItem}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
