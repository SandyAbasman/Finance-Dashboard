/* eslint-disable react/prop-types */
export default function InputField({ inputName, placeholder }) {
  return (
    <div className="w-[48%] h-auto flex flex-col justify-start items-start gap-1">
      <label className="text-black/50 tex-md font-medium" htmlFor={inputName}>
        {inputName}
      </label>
      <input
        type="text"
        htmlFor="fullname"
        placeholder={placeholder}
        className="w-full h-auto py-3 px-2  outline-none border-none bg-[#F9F9F9] rounded-[0.4rem] text-black/70"
      />
    </div>
  );
}
