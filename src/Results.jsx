import { useNavigate } from "react-router-dom";
import { SectionContainer } from "./components/SectionContainer";
import GaugeComponent from "react-gauge-component";
import { Layout } from "./components/Layout";

export const Results = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <SectionContainer>
        <h1 className="text-[60px] text-bold">Your Results</h1>

        <GaugeComponent
          value={80}
          type="radial"
          hide={true}
          labels={{
            tickLabels: {
              type: "inner",
              //   ticks: [
              //     { value: 20 },
              //     { value: 40 },
              //     { value: 60 },
              //     { value: 80 },
              //     { value: 100 },
              //   ],
              hide: true,
            },
            valueLabel: {
              style: {
                fontSize: "35px",
                fill: "#000",
                // textShadow:
                //   "black 1px 1px 0px, black 0px 0px 2.5em, black 0px 0px 0.2em",
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

        <h2>Average salary is: £50,000</h2>
        <h2>Your salary is: £40,000</h2>
      </SectionContainer>
    </Layout>
  );
};
