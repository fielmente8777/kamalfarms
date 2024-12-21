import { SectionWithContainer } from "@/components";
import {
  CompletedProjects,
  CustomerSatisfaction,
  RevenueGrowth,
} from "@/icons/icons";

const CompanyFacts = () => {
  const facts = [
    {
      icon: <CompletedProjects />,
      title: "Completed Projects",
    },
    {
      icon: <RevenueGrowth />,
      title: "Revenue Growth",
    },
    {
      icon: <CustomerSatisfaction />,
      title: "Customer Satisfaction",
    },
  ];
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 w-full">
        <div className="col-span-1 flex flex-col justify-center ">
          <h2 className="heading5">Company Facts</h2>
          <h3 className="heading4 font-semibold">
            We are proud of our design team
          </h3>
          <p className="description">
            Our team of designers are creative, innovative and experienced in
            every aspect of their work.
          </p>
        </div>
        <div className="col-span-2 lg:grid grid-cols-3 justify-center items-center">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-3"
            >
              {fact.icon}
              <p className="font-medium capitalize text-base">
                {fact.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default CompanyFacts;
