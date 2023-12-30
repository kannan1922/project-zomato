/// <reference types="@types/googlemaps" />
import React, { useState, useEffect } from "react";
import "./form.css";
import Select from "react-select";
import axios from "axios";
interface TimeInput {
  opensAt: string;
  closesAt: string;
}
interface Form2Props {
    onSubmit: () => void;
  }
  
  function Form2({ onSubmit }: Form2Props){
 
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 1; hour <= 12; hour++) {
      options.push({ label: `${hour}:00 AM`, value: `${hour}:00 AM` });
      options.push({ label: `${hour}:30 AM`, value: `${hour}:30 AM` });
    }

    for (let hour = 1; hour <= 12; hour++) {
      options.push({ label: `${hour}:00 PM`, value: `${hour}:00 PM` });
      options.push({ label: `${hour}:30 PM`, value: `${hour}:30 PM` });
    }
    return options;
  };
  const timeOptions = generateTimeOptions();



  const [selectedOption, setSelectedOption] = useState("both");

  const handleRadioButtonChange = (option: any) => {
    setSelectedOption(option);
  };

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCategoriesDays, setSelectedCategoriesDays] = useState<
    string[]
  >([]);
  const [selectedCategoriesFood, setSelectedCategoriesFood] = useState<
    string[]
  >([]);

  const handleCheckboxChangeFood = (category: string) => {
    if (selectedCategoriesFood.includes(category)) {
      setSelectedCategoriesFood((prevCategories) =>
        prevCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategoriesFood((prevCategories) => [
        ...prevCategories,
        category,
      ]);
    }
  };

  const handleCheckboxChangeDays = (category: string) => {
    if (selectedCategoriesDays.includes(category)) {
      setSelectedCategoriesDays((prevCategories) =>
        prevCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategoriesDays((prevCategories) => [
        ...prevCategories,
        category,
      ]);
    }
  };

  const handleCheckboxChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    }
  };

  const [timeInput, setTimeInput] = useState<TimeInput>({
    opensAt: "",
    closesAt: "",
  });

  const handleTimeChange = (selectedOption: any, field: keyof TimeInput) => {
    if (selectedOption && selectedOption.value) {
      console.log(timeInput);
      setTimeInput({
        ...timeInput,
        [field]: selectedOption.value,
      });
    } else {
      console.error("Invalid selected option:", selectedOption);
    }
  };
  console.log(timeInput.opensAt);

  const handlePrint = () => {
    const zz = async () => {
      const mappedOpeningHours: any = {};
      selectedCategoriesDays.forEach((day) => {
        mappedOpeningHours[day] = [timeInput];
      });
      const id = localStorage.getItem("tokenid");
      try {
        const postData = {
          Type: String(selectedOption),
          Outlet: selectedCategories,
          Cuisines: selectedCategoriesFood,
          Operational_Hrs: mappedOpeningHours,
        };
        const response = await axios.post(
          `http://localhost:4000/partner-with-us/create-your-res/2/${id}`,
          postData
        );
        console.log(response.data);
        if(response.data)
        {
            onSubmit()
            console.log('p')
        }
      } catch (error: any) {
        console.log("Error:", error);
      }
    };
    zz();
  };

  return (
    <div className={`resInformation`}>
      <div className="resInfoHeading">Restaurant Type & Timings</div>

      <div className="resInformationDetails1">
        <div>
          <div>Establishment type</div>
          <div className="lightColor">
            Select most relevant category for your restaurant type
          </div>
          <div className="">
            <div>
              <label>
                <input
                  type="radio"
                  value="both"
                  checked={selectedOption === "both"}
                  onChange={() => handleRadioButtonChange("both")}
                />
                Both, delivery and dine-in available
                <div className="reslight">
                  Select this option when you have a place for customers to
                  dine-in and also want to activate online ordering for your
                  restaurant
                </div>
              </label>
            </div>

            <div>
              {" "}
              <label>
                <input
                  type="radio"
                  value="dineIn"
                  checked={selectedOption === "dineIn"}
                  onChange={() => handleRadioButtonChange("dineIn")}
                />
                Dine-in only
                <div className="reslight">
                  Select when you don’t want to register for online ordering
                </div>
              </label>
            </div>

            <div>
              {" "}
              <label>
                <input
                  type="radio"
                  value="delivery"
                  checked={selectedOption === "delivery"}
                  onChange={() => handleRadioButtonChange("delivery")}
                />
                Delivery only
                <div className="reslight">
                  Select when you don’t have a facility for customers to dine-in
                  (like delivery kitchens)
                </div>
              </label>
            </div>
          </div>
          {(selectedOption === "dineIn" || selectedOption === "both") && (
            <div className="divWithLabels">
              <div className="labelContainer">
                <div>
                  <label className="resLabel">
                    <input
                      type="checkbox"
                      value="Bakery"
                      checked={selectedCategoriesFood.includes("Bakery")}
                      onChange={() => handleCheckboxChangeFood("Bakery")}
                    />
                    Bakery
                  </label>

                  <label className="resLabel">
                    <input
                      type="checkbox"
                      value="Beverage Shop"
                      checked={selectedCategoriesFood.includes("Beverage Shop")}
                      onChange={() => handleCheckboxChangeFood("Beverage Shop")}
                    />
                    Beverage Shop
                  </label>

                  <label className="resLabel">
                    <input
                      type="checkbox"
                      value="Cafe"
                      checked={selectedCategoriesFood.includes("Cafe")}
                      onChange={() => handleCheckboxChangeFood("Cafe")}
                    />
                    Cafe
                  </label>
                </div>

                <div>
                  {" "}
                  <label className="resLabel">
                    <input
                      type="checkbox"
                      value="Casual Dining"
                      checked={selectedCategoriesFood.includes("Casual Dining")}
                      onChange={() => handleCheckboxChangeFood("Casual Dining")}
                    />
                    Casual Dining
                  </label>
                  <label className="resLabel">
                    <input
                      type="checkbox"
                      value="Sweet Shop"
                      checked={selectedCategoriesFood.includes("Sweet Shop")}
                      onChange={() => handleCheckboxChangeFood("Sweet Shop")}
                    />
                    Sweet Shop
                  </label>
                  <label className="resLabel">
                    <input
                      type="checkbox"
                      value="Dessert Parlour"
                      checked={selectedCategoriesFood.includes(
                        "Dessert Parlour"
                      )}
                      onChange={() =>
                        handleCheckboxChangeFood("Dessert Parlour")
                      }
                    />
                    Dessert Parlour
                  </label>
                </div>

                <div>
                  <label className="resLabel">
                    <input
                      type="checkbox"
                      value="Food Court"
                      checked={selectedCategoriesFood.includes("Food Court")}
                      onChange={() => handleCheckboxChangeFood("Food Court")}
                    />
                    Food Court
                  </label>

                  <label className="resLabel">
                    <input
                      type="checkbox"
                      value="Quick Bites"
                      checked={selectedCategoriesFood.includes("Quick Bites")}
                      onChange={() => handleCheckboxChangeFood("Quick Bites")}
                    />
                    Quick Bites
                  </label>
                </div>

                {/* <div>
              <p>
                Selected categories:{" "}
                {selectedCategories.length > 0
                  ? selectedCategories.join(", ")
                  : "None selected"}
              </p>
            </div> */}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="resContainer2">
        <div>Type of cuisines</div>
        <div>Select options which best describe food your serve1</div>

        <div className="divWithLabels">
          <div className="labelContainer">
            <div>
              <label className="resLabel">
                <input
                  type="checkbox"
                  value="Beverages"
                  checked={selectedCategories.includes("Beverages")}
                  onChange={() => handleCheckboxChange("Beverages")}
                />
                Beverages
              </label>

              <label className="resLabel">
                <input
                  type="checkbox"
                  value="Biryani"
                  checked={selectedCategories.includes("Biryani")}
                  onChange={() => handleCheckboxChange("Biryani")}
                />
                Biryani
              </label>

              <label className="resLabel">
                <input
                  type="checkbox"
                  value="North Indian"
                  checked={selectedCategories.includes("North Indian")}
                  onChange={() => handleCheckboxChange("North Indian")}
                />
                North Indian
              </label>
            </div>

            <div>
              {" "}
              <label className="resLabel">
                <input
                  type="checkbox"
                  value="Fast Food"
                  checked={selectedCategories.includes("Fast Food")}
                  onChange={() => handleCheckboxChange("Fast Food")}
                />
                Fast Food
              </label>
              <label className="resLabel">
                <input
                  type="checkbox"
                  value="South Indian"
                  checked={selectedCategories.includes("South Indian")}
                  onChange={() => handleCheckboxChange("South Indian")}
                />
                South Indian
              </label>
              <label className="resLabel">
                <input
                  type="checkbox"
                  value="Desserts"
                  checked={selectedCategories.includes("Desserts")}
                  onChange={() => handleCheckboxChange("Desserts")}
                />
                Desserts
              </label>
            </div>

            <div>
              <label className="resLabel">
                <input
                  type="checkbox"
                  value="Street Food"
                  checked={selectedCategories.includes("Street Food")}
                  onChange={() => handleCheckboxChange("Street Food")}
                />
                Street Food
              </label>

              <label className="resLabel">
                <input
                  type="checkbox"
                  value="Chinese"
                  checked={selectedCategories.includes("Chinese")}
                  onChange={() => handleCheckboxChange("Chinese")}
                />
                Chinese
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="resContainer2">
        <div>Restaurant operational hours</div>
        <div>Mark restaurant opening and closing hours</div>

        <div className="flexx">
          <div>
            <label>
              Opening Time:
              <Select
                options={timeOptions}
                //   value={{ label: timeInput.openingTime, value: timeInput.openingTime }}
                onChange={(selectedOption: any) =>
                  handleTimeChange(selectedOption, "opensAt")
                }
              />
            </label>
          </div>

          <div>
            <label>
              Closing Time:
              <Select
                options={timeOptions}
                //   value={{ label: timeInput.closingTime, value: timeInput.closingTime }}
                onChange={(selectedOption: any) =>
                  handleTimeChange(selectedOption, "closesAt")
                }
              />
            </label>
          </div>
        </div>
        <div>
          <div>Mark open days</div>
          <div>Don’t forget to uncheck your off-day</div>
          <div>
            <div className="labelContainer">
              <div>
                <label className="resLabel">
                  <input
                    type="checkbox"
                    value="Monday"
                    checked={selectedCategoriesDays.includes("Monday")}
                    onChange={() => handleCheckboxChangeDays("Monday")}
                  />
                  Monday
                </label>

                <label className="resLabel">
                  <input
                    type="checkbox"
                    value="Tuesday"
                    checked={selectedCategoriesDays.includes("Tuesday")}
                    onChange={() => handleCheckboxChangeDays("Tuesday")}
                  />
                  Tuesday
                </label>

                <label className="resLabel">
                  <input
                    type="checkbox"
                    value="Wednesday"
                    checked={selectedCategoriesDays.includes("Wednesday")}
                    onChange={() => handleCheckboxChangeDays("Wednesday")}
                  />
                  Wednesday
                </label>
              </div>

              <div>
                {" "}
                <label className="resLabel">
                  <input
                    type="checkbox"
                    value="Thursday"
                    checked={selectedCategoriesDays.includes("Thursday")}
                    onChange={() => handleCheckboxChangeDays("Thursday")}
                  />
                  Thursday
                </label>
                <label className="resLabel">
                  <input
                    type="checkbox"
                    value="Friday"
                    checked={selectedCategoriesDays.includes("Friday")}
                    onChange={() => handleCheckboxChangeDays("Friday")}
                  />
                  Friday
                </label>
                <label className="resLabel">
                  <input
                    type="checkbox"
                    value="Saturday"
                    checked={selectedCategoriesDays.includes("Saturday")}
                    onChange={() => handleCheckboxChangeDays("Saturday")}
                  />
                  Saturday
                </label>
              </div>

              <div>
                <label className="resLabel">
                  <input
                    type="checkbox"
                    value="Sunday"
                    checked={selectedCategoriesDays.includes("Sunday")}
                    onChange={() => handleCheckboxChangeDays("Sunday")}
                  />
                  Sunday
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={()=>{handlePrint()}}>clcik</button>
      </div>
      <div>
        Zomato may disclose the information provided by you, including but not
        limited to the contact number and email address of the authorised
        persons, with third party service providers for provision of Zomato
        services
      </div>
      <div>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Form2;
