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
    console.log(totalSalarySum)
    return totalSalarySum / len;
  } catch (err) {}
};

const calculatePercentage = (average, salary) => {
  return (salary / average) * 100;
};

const getDiff = (average = 0, salary) => {
  return average - salary
}

const getDescriptor = (diff) => {
  if (diff > 0) {
    return `You are earning £${Math.abs(diff).toFixed(2)} less than the average salary`
  } 
  else if (diff === 0) {
    return "You are earinig the same as the average salary"
  }
  else if (diff < 0) {
    return `You are earning £${Math.abs(diff).toFixed(2)} more than the average salary`
  }
}

//(value/total value)×100%

export const Results = () => {
  const location = useLocation();
  const previousStateSalary = location?.state?.salary;
  const [comparer, setComparer] = useState("all"); // all | female | male
  const [average, setAverage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const diff = getDiff(average, previousStateSalary)

  useEffect(() => {
    const getAverage = async () => {
      try {
        const res = await axios.get(`${DATABASE}/salaries/users/`);
        const average = calculateAverage(res.data);
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
            style={{width: 300, margin: '0 auto'}}
            labels={{
              valueLabel: {
                style: {
                  fontSize: "35px",
                  fill: "#fff",
                },
                hide: true
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
              Your salary is: £{previousStateSalary}
            </h2>
            <h2 className="font-bold text-[20px]">
              Average salary is: £{average?.toFixed(2)}
            </h2>
            <h2 className="font-bold text-[20px]">
              {getDescriptor(diff)}
            </h2>
            <h2 className="font-bold text-[20px] mt-2">
              If you are looking for new job oppertunities please get in touch with our trusted partners!
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
