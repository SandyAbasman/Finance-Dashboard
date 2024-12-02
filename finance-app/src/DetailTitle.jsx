/* eslint-disable react/prop-types */
function DetailTitle({ detailName, totalDetailAMount }) {
  return (
    <div className="w-full p-[2rem] bg-[#FAFAFA] rounded-md  h-auto flex flex-row justify-between item-center">
      <h2 className="text-[1.5rem] text-[#565656] ">{detailName}</h2>
      <div className="w-fit h-auto flex flex-row justify-start items-center">
        <p className="text-[#00B600]">{totalDetailAMount}</p>
        <select className=" text-[#636363]">
          <option value="">USD</option>
          <option value="">USD</option>
        </select>
      </div>
    </div>
  );
}

export default DetailTitle;
