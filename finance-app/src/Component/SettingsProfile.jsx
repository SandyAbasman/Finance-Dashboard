// import avatar from "../assets/avatar.svg";
import picture from "../assets/picture.png";

function SettingsProfile() {
  return (
    <div className="w-full h-auto flex flex-row justify-between item-center p-4">
      <div className=" w-[4rem] h-[4rem] flex flex-row gap-4 justify-start items-center  ">
        <img className="w-fit h-auto rounded-full" src={picture} alt="avatar" />
        <div>
          <h3 className="text-[1.3rem] font-semibold text-nowrap text-black/70">
            Sandy Abasifreke
          </h3>
          <p className="text-sm text-black/50">abasifrekesandy@gmail.com</p>
        </div>
      </div>
      <div className="w-fit h-auto flex flex-col justify-center items-center ">
        <button className=" px-4 py-[0.5rem] text-black/60 rounded-[0.4rem] hover:opacity-80 text-sm bg-[#F8F8F8] ">
          Edit
        </button>
      </div>
    </div>
  );
}

export default SettingsProfile;
