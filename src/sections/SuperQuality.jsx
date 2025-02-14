/* eslint-disable no-unused-vars */
import Button from "../components/Button";
import {shoe8} from "../assets/images";
import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
const SuperQuality = () => {
  const {dark, toggleDarkMode} = useContext(DarkModeContext);
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize lg:max-w-lg font-bold dark:dark-text-h">
          We Provide you
          <span className="text-coral-red "> Super </span>
          <span className="text-coral-red">Quality</span> shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text dark:dark-text-p">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text dark:dark-text-p">
          Our dedication to details and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          {" "}
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          className="object-contain"
          src={shoe8}
          alt="shoe"
          width={570}
          height={522}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
