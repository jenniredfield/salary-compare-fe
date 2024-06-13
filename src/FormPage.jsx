import { useNavigate } from "react-router-dom";
import { SectionContainer } from "./components/SectionContainer";
import { Button } from "./components/Button";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import { Layout } from "./components/Layout";
import { SlideUp } from "./components/SlideUp";

const FORM_INPUTS = [
  { name: "role", placeholder: "Role", id: "role" },
  { name: "salary", placeholder: "Salary", id: "salary" },
  {
    name: "yearsExperience",
    placeholder: "Years Experience",
    id: "yearsExperience",
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
  {
    name: "industry",
    placeholder: "Industry",
    id: "industry",
  },
];

export const FormPage = () => {
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      name: "",
      role: "",
      salary: "",
      yearsExperience: "",
      gender: "",
      companySize: "",
      industry: "",
      email: "",
      // fruit: "",
    },
  });

  const onSubmit = (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data);

    navigate("/results");
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
