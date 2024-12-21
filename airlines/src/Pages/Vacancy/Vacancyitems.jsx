import React from "react";
import Vacancy from "./Vacancy";

export default function Vacancyitems({ jobItems }) {
  return (
    <div>
      {jobItems.map((item) => (
        <Vacancy
          jobImages={item.jobImages}
          jobTitle={item.jobTitle}
          jobDescription={item.jobDescription}
          jobUpdated={item.jobUpdated}
        />
      ))}
    </div>
  );
}
