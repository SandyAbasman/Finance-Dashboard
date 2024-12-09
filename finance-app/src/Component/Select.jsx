export default function Select() {
  return (
    <div className=" w-fit h-auto flex  flex-row  rounded-md  border-solid ">
      <select className=" w-fit h-auto bg-[#f8f8ff] px-[1px] py-[0.8rem] outline-none rounded-md text-black/70  border-r-[0.5rem]  border-[#f8f8f8] cursor-pointer">
        <option value="">SortBy</option>
        <option value="income">Income</option>
        <option value="expenses">Expenses</option>
        <option value="investments">Investments</option>
      </select>
    </div>
  );
}
