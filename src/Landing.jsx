import { useNavigate } from "react-router-dom";
import { SectionContainer } from "./components/SectionContainer";
import { Button } from "./components/Button";
import { Layout } from "./components/Layout";
import { APP_NAME } from "./constants/constants";
import { SlideUp } from "./components/SlideUp";
import { ContentSection } from "./components/ContentSection";

export const Landing = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/form");
  };
  return (
    <Layout>
      <div className="h-[800px] w-full bg-[url('/public/hero-landing.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-center">
        <SlideUp>
          <h1 className="text-white text-center text-[100px]">
            Bridge the Wage Gap
          </h1>
        </SlideUp>
      </div>
      <SectionContainer>
        <div className="flex flex-col gap-[20px] items-center w-full">
          <SlideUp>
            <div className="flex md:flex-row flex-col justify-between gap-[20px] px-0 md:px-4  w-full">
              <ContentSection
                title="Bridge the Wage Gap"
                content={` ${APP_NAME} is a platform designed for professionals to anonymously
              share and compare salary information. Our mission is to promote
              transparency and equality in the workplace including men, women
              and no binary to improve the competitiveness in the job market.`}
              />
              <ContentSection
                title="Security and Data privacy"
                content={`${APP_NAME} is strongly committed to protecting personal data. This privacy statement describes why and how we collect and use personal data and provides information about individuals’ rights. It applies to personal data provided to us, both by individuals themselves or by others. We may use personal data provided to us for any of the purposes described in this privacy statement or as otherwise stated at the point of collection.`}
              />
            </div>

            <div className="max-w-[300px] mx-auto">
              <Button onClick={onClick}>Start Now!</Button>
            </div>
          </SlideUp>
        </div>
      </SectionContainer>
    </Layout>
  );
};
