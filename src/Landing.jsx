import { useNavigate } from "react-router-dom";
import { SectionContainer } from "./components/SectionContainer";
import { Button } from "./components/Button";
import { Layout } from "./components/Layout";
import { APP_NAME } from "./constants/constants";

export const Landing = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/form");
  };
  return (
    <Layout>
      <div className="h-[800px] w-full bg-[url('/public/hero-landing.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-center">
        <div className="text-white text-center pb-[100px]">
          <h1 className="text-white text-center text-[100px]">
            Bridge the Wage Gap
          </h1>
        </div>
      </div>
      <SectionContainer>
        <div className="flex flex-col gap-[20px] justify-center items-center">
          <h1 className="text-[60px] text-bold">💸 {APP_NAME} 💸</h1>
          <div>
            <h2 className="font-bold text-xl mb-2">Bridge the Wage Gap</h2>
            <p className="max-w-[600px]">
              {APP_NAME} is a platform designed for professionals to anonymously
              share and compare salary information. Our mission is to promote
              transparency and equality in the workplace including men, women
              and no binary to improve the competitiveness in the job market.{" "}
            </p>
          </div>
          <div>
            <Button onClick={onClick}>Start Now!</Button>
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
};
