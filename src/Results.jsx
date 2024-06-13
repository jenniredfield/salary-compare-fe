import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GaugeComponent from "react-gauge-component";
import { SectionContainer } from "./components/SectionContainer";
import { Layout } from "./components/Layout";
import { SlideUp } from "./components/SlideUp";
import { Button } from "./components/Button";

const BUTTON_OPTIONS = [
  { id: "all", text: "All" },
  { id: "male", text: "Male" },
  { id: "female", text: "Female" },
];

export const Results = () => {
  const [comparer, setComparer] = useState("all"); // all | female | male
  const navigate = useNavigate();

  const onToggle = (id) => {
    setComparer(id);
  };

  return (
    <Layout>
      <SectionContainer>
        <SlideUp>
          <h1 className="text-[40px] text-bold text-center">Your Results</h1>
          <GaugeComponent
            value={80}
            type="radial"
            hide={true}
            labels={{
              valueLabel: {
                style: {
                  fontSize: "35px",
                  fill: "#000",
                },
              },
            }}
            arc={{
              colorArray: ["#5BE12C", "#EA4228"],
              subArcs: [{ limit: 10 }, { limit: 30 }, {}, {}, {}],
              padding: 0.02,
              width: 0.3,
            }}
            pointer={{
              elastic: true,
              animationDelay: 0,
            }}
          />

          <div className="text-center mt-[20px]">
            <h2 className="font-bold text-[20px]">
              Average salary is: £50,000
            </h2>
            <h2 className="font-bold text-[20px]">Your salary is: £40,000</h2>
          </div>
          <div className="mt-[40px]">
            <h2 className="mb-6 font-bold">Compare by:</h2>
            <div className="flex gap-4">
              {BUTTON_OPTIONS.map((option) => {
                return (
                  <Button
                    onClick={() => onToggle(option.id)}
                    active={option.id === comparer}
                  >
                    {option.text}
                  </Button>
                );
              })}
            </div>
          </div>
        </SlideUp>
      </SectionContainer>
    </Layout>
  );
};
