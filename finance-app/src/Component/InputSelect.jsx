/* eslint-disable react/prop-types */
function InputSelect({ LabelName, option1, option2, option3 }) {
  return (
    <div className="w-[48%] h-auto flex flex-col justify-start items-start gap-1">
      <label className="text-black/50 tex-md font-medium" htmlFor={LabelName}>
        {LabelName}
      </label>
      <select
        name={LabelName}
        className="w-full h-auto py-4 px-2 outline-none  bg-[#F9F9F9] border-r-[1rem] border-[#F9F9F9]  rounded-[0.4rem] text-black/70"
      >
        <option value={option1}> {option1}</option>
        <option value={option2}> {option2}</option>
        <option value={option3}> {option3}</option>
      </select>
    </div>
  );
}

export default InputSelect;
