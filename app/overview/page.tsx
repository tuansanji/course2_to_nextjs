import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCrumb
        title1={"overview"}
        title2={"pages"}
        currentpage={"overview"}
      />
    </div>
  );
};

export default page;
