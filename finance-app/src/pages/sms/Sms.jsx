import { useContext, useState } from "react";
import Notification from "../../Component/Notification";
// import Select from "../../Component/Select";
import { userContext } from "../../contextApi/UserContextComponent";

export default function Sms() {
  const { array, deleteItem, setFIlteredArray, filteredArray } =
    useContext(userContext);
    
  const [searchedText, setSearched] = useState("");

  return (
    <div className="w-full h-auto px-[2rem] py-[1rem] flex flex-col justify-start items-start gap-2 ">
      <div className="w-full h-auto flex flex-col justify-start items-center ">
        <div className="w-full h-auto flex felx-row justify-center items-center">
          <input
            type="text"
            className="border w-[20rem] px-2  py-[0.8rem]"
            value={searchedText}
            onChange={(e) => setSearched(e.target.value)}
          />
          <button
            onClick={() => {
              // console.log(
              //   array.filter((item) => item.NotificationBody.includes("Note"))
              // );

              const filter = array.filter(function (item) {
                return item.wariningTitle
                  .toLocaleLowerCase()
                  .includes(searchedText.toLocaleLowerCase());
              });
              setFIlteredArray(filter);
            }}
            className=" w-fit h-auto  bg-[#f8f8ff] px-6 py-[0.8rem]  mx-2 outline-none rounded-md text-black/70  border  border-black/20 cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col justify-start items-start py-[1rem] px-[1rem] gap-6">
        {filteredArray.map(function (item, index) {
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
