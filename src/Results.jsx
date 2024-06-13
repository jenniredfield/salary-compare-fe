import { useNavigate } from "react-router-dom";
import { SectionContainer } from "./components/SectionContainer";
import GaugeComponent from "react-gauge-component";
import { Layout } from "./components/Layout";
import { SlideUp } from "./components/SlideUp";

export const Results = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <SectionContainer>
        <SlideUp>
          <h1 className="text-[60px] text-bold">Your Results</h1>
          <GaugeComponent
            value={80}
            type="radial"
            hide={true}
            labels={{
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

          <div className="text-center mt-[20px]">
            <h2 className="font-bold text-[20px]">
              Average salary is: £50,000
            </h2>
            <h2 className="font-bold text-[20px]">Your salary is: £40,000</h2>
          </div>
        </SlideUp>
      </SectionContainer>
    </Layout>
  );
};
