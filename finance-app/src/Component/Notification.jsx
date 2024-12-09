import PropTypes from "prop-types";

import { TiDeleteOutline } from "react-icons/ti";

export default function Notification({
  icon,
  wariningTitle,
  NotificationBody,
  colorId,
  deleteItem,
  id,
}) {
  return (
    <div
      className={`${
        colorId === 1
          ? "border-l-red-500"
          : colorId === 2
          ? "border-green-300"
          : "border-gray-600"
      }  py-4 px-4 w-full h-auto rounded-r-[1rem] border-l-[0.1rem] flex-row flex  bg-[#fdfdfd] justify-between items-center`}
    >
      <div className="flex flex-row gap-1 justify-start items-start">
        <div className="w-fit h-full">
          <img src={icon} alt={wariningTitle} />
        </div>
        <div className={`w-fit  h-auto`}>
          <h2
            className={`text-md ${
              colorId === 2
                ? "text-green-400"
                : colorId === 1
                ? "text-red-500"
                : "text-gray-600"
            } font-medium  `}
          >
            {wariningTitle}
          </h2>
          <p className="text-gray-400">{NotificationBody}</p>
        </div>
      </div>

      <div
        onClick={() => deleteItem(id)}
        className="w-fit h-auto cursor-pointer"
      >
        <TiDeleteOutline
          size={"30px"}
          className="text-black/50 hover:text-zinc-950"
        />
      </div>
    </div>
  );
}

Notification.propTypes = {
  icon: PropTypes.string,
  wariningTitle: PropTypes.string,
  NotificationBody: PropTypes.string,
  colorId: PropTypes.number.isRequired,
  deleteItem: PropTypes.func,
  id: PropTypes.number,
};
