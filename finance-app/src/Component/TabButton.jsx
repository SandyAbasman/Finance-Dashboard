/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function TabButton({ buttonName, navigateTo }) {
  const navigate = useNavigate();
  return (
    <button
      className="md:py-[1.25rem] md:px-[3rem] py-3 px-2 text-nowrap focus:bg-[#E3E3E3] h-auto w-[35%] outline-none  border rounded-md  "
      onClick={() => navigate(navigateTo)}
    >
      {buttonName}
    </button>
  );
}
