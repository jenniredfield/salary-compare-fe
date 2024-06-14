import { useNavigate } from "react-router-dom";
import { SectionContainer } from "./components/SectionContainer";
import { Button } from "./components/Button";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import { Layout } from "./components/Layout";
import { SlideUp } from "./components/SlideUp";
import { DATABASE } from "./constants/config";
import axios from "axios";
import { useEffect } from "react";

const FORM_INPUTS = [
  { name: "role", placeholder: "Role", id: "role" },
  { name: "salary", placeholder: "Salary", id: "salary" },
  {
    name: "years_exp",
    placeholder: "Years Experience",
    id: "years_exp",
  },
  {
    name: "gender",
    placeholder: "Gender",
    id: "gender",
    type: "select",
    options: ["Female", "Male", "Non-Binary"],
  },
  // {
  //   name: "companySize",
  //   placeholder: "Company Size",
  //   id: "companySize",
  // },
  // {
  //   name: "industry",
  //   placeholder: "Industry",
  //   id: "industry",
  // },
];

export const FormPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  const methods = useForm({
    defaultValues: {
      role: "",
      salary: "",
      years_exp: "",
      gender: "female",
    },
  });

  const onSubmit = async (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    try {
      const res = await axios.post(`${DATABASE}/salaries/users/`, data);

      navigate("/results", { state: { salary: data.salary } });
    } catch (err) {
      console.log("🚀 ~ onSubmit ~ err:", err);
    }
  };

  return (
    <Layout>
      <SectionContainer>
        <SlideUp>
          <h1 className="text-[40px] text-bold mb-20 w-full">
            Please enter your details
          </h1>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="flex flex-col w-full"
            >
              {FORM_INPUTS.map((inputField) =>
                inputField?.type === "select" ? (
                  <Select
                    options={inputField.options}
                    name={inputField.name}
                    key={inputField.name}
                  />
                ) : (
                  <Input {...inputField} key={inputField?.name} />
                )
              )}
              <div className="mt-[100px] w-full">
                <Button type="submit">See Results!</Button>
              </div>
            </form>
          </FormProvider>
        </SlideUp>
      </SectionContainer>
    </Layout>
  );
};
