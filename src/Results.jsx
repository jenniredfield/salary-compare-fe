import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GaugeComponent from "react-gauge-component";
import { SectionContainer } from "./components/SectionContainer";
import { Layout } from "./components/Layout";
import { SlideUp } from "./components/SlideUp";
import { DATABASE } from "./constants/config";
import axios from "axios";

const BUTTON_OPTIONS = [
  { id: "all", text: "All" },
  { id: "male", text: "Male" },
  { id: "female", text: "Female" },
];

const calculateAverage = (list) => {
  try {
    const len = list.length;
    const totalSalarySum = list.reduce((a, b) => {
      return (a += Number(b.salary));
    }, 0);
    return totalSalarySum / len;
  } catch (err) {}
};

const calculatePercentage = (average, salary) => {
  return (salary / average) * 100;
};

//(value/total value)×100%

export const Results = () => {
  const location = useLocation();
  console.log("🚀 ~ Results ~ location:", location);
  const previousStateSalary = location?.state?.salary;
  const [comparer, setComparer] = useState("all"); // all | female | male
  const navigate = useNavigate();
  const [average, setAverage] = useState("");
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const getAverage = async () => {
      try {
        const res = await axios.get(`${DATABASE}/salary/users`);
        const average = calculateAverage(res);
        setAverage(average);
        const percentage = calculatePercentage(average, previousStateSalary);
        setPercentage(percentage);
      } catch (err) {
        console.log("🚀 ~ getAverage ~ err:", err);
      }
    };
    getAverage();
  }, []);

  return (
    <Layout>
      <SectionContainer>
        <SlideUp>
          <h1 className="text-[40px] text-bold text-center">Your Results</h1>
          <GaugeComponent
            value={percentage}
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
              Average salary is: £{average}
            </h2>
            <h2 className="font-bold text-[20px]">
              Your salary is: £{previousStateSalary}
            </h2>
          </div>
          {/* <div className="mt-[40px]">
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
          </div> */}
        </SlideUp>
      </SectionContainer>
    </Layout>
  );
};
