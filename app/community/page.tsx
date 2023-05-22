import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCrumb
        title1={"community"}
        title2={"pages"}
        currentpage={"community"}
      />
    </div>
  );
};

export default page;
