import sendIcon from "../assets/send.svg";

function ChatInput() {
  return (
    <div className="w-full relative h-auto ">
      <input
        placeholder="Talk to our AI finance expert"
        className="w-full  p-4  rounded-full border "
        type="text"
      />
      <img
        src={sendIcon}
        className="absolute cursor-pointer top-2 right-3   "
      />
    </div>
  );
}

export default ChatInput;
