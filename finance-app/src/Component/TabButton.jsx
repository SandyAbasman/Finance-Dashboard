/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function TabButton({ buttonName, navigateTo }) {
  const navigate = useNavigate();
  return (
    <button
      className="md:py-[0.8rem] md:px-[3rem]  text-black/60 focus:text-green-700 py-3 px-2 text-nowrap focus:border-b-green-700 h-auto w-[35%] outline-none  font-semibold border-b-2   "
      onClick={() => navigate(navigateTo)}
    >
      {buttonName}
    </button>
  );
}
