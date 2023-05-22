import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import React from 'react';

const page = () => {
  return (
    <div>
      <BreadCrumb
        title1={"store"}
        title2={"pages"}
        currentpage={"store"}
      />
    </div>
  );
};

export default page;
