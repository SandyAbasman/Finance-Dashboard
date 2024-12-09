import { FaRegEnvelope } from "react-icons/fa6";

export default function EmailDisplay() {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start   gap-4 ">
      <h3 className=" text-md font-semibold text-black/90 ">
        My Email Address
      </h3>
      <div className="flex flex-row gap-1 ">
        <FaRegEnvelope
          size={30}
          className=" border rounded-full text-black/50 bg-[#ffffff] p-1 "
        />
        <div>
          <p className="text-black/60 text-md">abasifrekesandy@gmail.com</p>
          <p className="text-black/50 text-sm">1 month ago</p>
        </div>
      </div>
      <button className=" px-4 py-[0.5rem] text-black/80 rounded-[0.4rem] hover:opacity-80 text-sm bg-[#F8F8F8] ">
        <span>+</span> Add Email Address
      </button>
    </div>
  );
}
