import EmailDisplay from "../../Component/EmailDisplay";
import InputField from "../../Component/InputField";
import InputSelect from "../../Component/InputSelect";
import SettingsProfile from "../../Component/SettingsProfile";

export default function Settings() {
  return (
    <div className="w-full h-auto px-[4rem] py-[2rem] flex flex-col justify-start items-start gap-4  ">
      <div className="w-full h-auto">
        <SettingsProfile />
      </div>

      <div className="w-full h-auto ">
        <div className="w-full h-auto flex flex-row flex-wrap justify-start items-center gap-3">
          <InputField inputName={"Full Name"} placeholder={"Your Full Name"} />
          <InputField inputName={"Nick Name"} placeholder={"Your Nick Name"} />

          <InputSelect
            LabelName={"Gender"}
            option1={"Male"}
            option2={"Female"}
            option3={"Non-binary"}
          />

          <InputSelect
            LabelName={"Language"}
            option1={"English"}
            option2={"French"}
            option3={"Arabic"}
          />
          <InputSelect
            LabelName={"Country"}
            option1={"USA"}
            option2={"Nigeria"}
            option3={"France"}
          />

          <InputSelect
            LabelName={"Currency"}
            option1={"Dollar"}
            option2={"Pounds"}
            option3={"Naira"}
          />
        </div>
      </div>
      <div className="w-full h-auto">
        <EmailDisplay />
      </div>
    </div>
  );
}
