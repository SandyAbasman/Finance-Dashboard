/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import incomeIcon from "../assets/income.svg";
import settingsIcon from "../assets/settings.svg";
import expensesIcon from "../assets/expenses.svg";
import smsIcon from "../assets/sms.svg";
import investmentIcon from "../assets/investments.svg";
import minimizeIcon from "../assets/mininize.svg";
import logo from "../assets/Logo.svg";
import { useContext } from "react";
import { userContext } from "../contextApi/UserContextComponent";

export default function Sidebar({ setIsOpen, isOpen }) {
  const { arrayLength } = useContext(userContext);
  return (
    <div className="sidebar-container">
      <img src={logo} alt="logo" />
      <div className="menu-items-container">
        <NavLink to={"/"}>
          <div className="menu-item">
            <div className="icon-container">
              <img src={incomeIcon} alt="Income" />
            </div>

            <div className="menu-text-container">
              <h1>Income</h1>
              <p>Click to see how much income you’ve made</p>
            </div>
          </div>
        </NavLink>

        <NavLink to={"expenses"}>
          <div className="menu-item">
            <div className="icon-container">
              <img src={expensesIcon} alt="expense" />
            </div>

            <div className="menu-text-container">
              <h1>Expenses</h1>
              <p>Click to see how much you’ve spent</p>
            </div>
          </div>
        </NavLink>

        <NavLink to={"sms"}>
          <div className="menu-item">
            <div className="icon-container">
              <img src={smsIcon} alt="sms" />
            </div>

            <div className="menu-text-container relative ">
              <h1>SMS alerts</h1>
              <p>Click to see your financial SMS notifications</p>
              <div className=" absolute right-0 top-5 rounded-full w-[24px] h-[24px] text-white  flex flex-row justify-center items-center text-center text-sm bg-red-600">
                {arrayLength}
              </div>
            </div>
          </div>
        </NavLink>

        <NavLink to={"investments"}>
          <div className="menu-item">
            <div className="icon-container">
              <img src={investmentIcon} alt="investment" />
            </div>

            <div className="menu-text-container">
              <h1>Investment</h1>
              <p>Click to see how much you’ve invested</p>
            </div>
          </div>
        </NavLink>

        <NavLink to={"settings"}>
          <div className="menu-item">
            <div className="icon-container">
              <img src={settingsIcon} alt="settings" />
            </div>

            <div className="menu-text-container">
              <h1>Settings</h1>
              <p>Click to change your settings</p>
            </div>
          </div>
        </NavLink>
      </div>

      <div
        onClick={() => setIsOpen(false)}
        className={`w-full h-auto flex flex-row justify-start p-[1rem] items-center cursor-pointer gap-[0.5rem]`}
      >
        <img
          className={`w-[30px]  ${
            isOpen
              ? "active:rotate-180 [transition:transform_0.8s_ease-in-out] "
              : ""
          } `}
          src={minimizeIcon}
          alt="minimize"
        />

        <p className="text-[1.1rem]  font-bold text-white/80">Minimize Menu</p>
      </div>
    </div>
  );
}
