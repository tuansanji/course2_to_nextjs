import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import React from 'react';

const page = () => {
  return (
    <div>
      <BreadCrumb
        title1={"contact"}
        title2={"pages"}
        currentpage={"contact"}
      />
    </div>
  );
};

export default page;
