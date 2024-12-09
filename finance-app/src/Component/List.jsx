import PropTypes from "prop-types";

export default function List({ amount, date }) {
  return (
    <div
      className={`w-full h-auto p-[0.4rem] flex flex-row justify-between items-start ${
        amount < 10000
          ? "border-orange-300 border-l-2"
          : "border-l-2  border-[#00B658]"
      }`}
    >
      <div className="w-fit h-auto flex flex-col justify-start items-start">
        <p className="font-semibold text-black/80  text-md">{amount}</p>
        <p className="text-[#868686]  font-light text-sm">{date}</p>
      </div>

      <div className="w-fit h-auto">
        <p className="text-[#868686]  font-light text-sm">See Detail</p>
      </div>
    </div>
  );
}

List.propTypes = {
  amount: PropTypes.number.isRequired,
  date: PropTypes.string,
};
