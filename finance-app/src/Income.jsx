import { useNavigate } from "react-router-dom";

export default function Income() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-auto   gap-6 flex flex-row justify-start  item-center ">
      <button
        className="py-[1.25rem] px-[3rem] h-auto w-[35%] outline-none  border rounded-md  "
        onClick={() => navigate("fiat")}
      >
        Fiat Income
      </button>
      <button
        className="py-[1.25rem] px-[3rem] h-auto w-[35%] outline-none  border rounded-md  "
        onClick={() => navigate("crypto")}
      >
        Crypto Income
      </button>
      <button
        className="py-[1.25rem] px-[3rem] h-auto w-[35%] outline-none  border rounded-md  "
        onClick={() => navigate("total")}
      >
        Total Income
      </button>
    </div>
  );
}
