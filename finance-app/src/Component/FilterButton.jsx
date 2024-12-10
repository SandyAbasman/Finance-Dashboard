/* eslint-disable react/prop-types */
export default function FilterButton({ filterNumber }) {
  return (
    <div className="w-full h-auto flex flex-row justify-end item-start py-4">
      <select className="bg-[#F8F8F8] text-black/60 border-[#f8f8f8] border-r-[0.5rem]  p-2 rounded-md">
        <option value="">Filter Applied: {filterNumber}</option>
        <option value="">Days</option>
      </select>
    </div>
  );
}
