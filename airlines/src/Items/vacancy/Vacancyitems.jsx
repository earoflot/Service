import React from "react";
import Vacancy from "../../Pages/Vacancy/Vacancy";

export default function Vacancyitems({ jobItems }) {
  return (
    <div>
      {jobItems.map((jobItem) => (
        <Vacancy
          jobImages={jobItem.jobImage}
          jobTitle={jobItem.jobTitle}
          jobDescription={jobItem.jobDescription}
          jobUpdated={jobItem.jobUpdated}
        />
      ))}
    </div>
  );
}
