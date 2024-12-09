/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import incomeIcon from "../assets/income.svg";
import settingsIcon from "../assets/settings.svg";
import expensesIcon from "../assets/expenses.svg";
import smsIcon from "../assets/sms.svg";
import investmentIcon from "../assets/investments.svg";
import minimizeIcon from "../assets/mininize.svg";
import { useContext } from "react";
import { userContext } from "../contextApi/UserContextComponent";

export default function MobileSideBar({ setIsOpen, isOpen }) {
  const { arrayLength } = useContext(userContext);
  return (
    <div className="w-[8rem] h-full bg-[#3a3a3a] flex flex-col justify-between py-[4rem] items-center  rounded-[1.5rem]">
      <div className=" h-auto flex flex-col  justify-start items-center gap-12">
        <NavLink to={"/"}>
          <img className="w-[50px] h-[40px]" src={incomeIcon} alt="income" />
        </NavLink>
        <NavLink to={"expenses"}>
          <img
            className="w-[40px] h-[40px]"
            src={expensesIcon}
            alt="expenses"
          />
        </NavLink>
        <NavLink to={"sms"}>
          <div className="relative">
            <img className="w-[40px] h-[40px]" src={smsIcon} alt="sms" />
            <div className=" absolute left-5 top-0 rounded-full w-[24px] h-[24px] text-white  flex flex-row justify-center items-center text-center text-sm bg-red-600">
              {arrayLength}
            </div>
          </div>
        </NavLink>
        <NavLink to={"investments"}>
          <img
            className="w-[40px] h-[40px]"
            src={investmentIcon}
            alt="investment"
          />
        </NavLink>
        <NavLink to={"settings"}>
          <img
            className="w-[40px] h-[40px]"
            src={settingsIcon}
            alt="settings"
          />
        </NavLink>
      </div>

      <div
        onClick={() => setIsOpen(true)}
        className="w-full   h-auto flex flex-row justify-center cursor-pointer p-[1rem]  gap-[0.5rem]"
      >
        <img
          className={`w-[40px]  ${
            !isOpen ? "rotate-180" : ""
          }  [transition:transform_1s_ease-in-out] h-[40px] `}
          src={minimizeIcon}
          alt="minimize"
        />
      </div>
    </div>
  );
}
