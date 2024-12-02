/* eslint-disable react/prop-types */
function DownloadButton({ buttonName, icon }) {
  return (
    <>
      <div className=" bg-[#F8F8F8] p-4 rounded-md cursor-pointer flex flex-row gap-1  text-[#848484]">
        <p>{buttonName}</p>
        <img src={icon} alt="button icon" />
      </div>
    </>
  );
}

export default DownloadButton;
