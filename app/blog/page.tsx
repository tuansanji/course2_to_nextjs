import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import React from 'react';

const page = () => {
  return (
    <div>
      <BreadCrumb
        title1={"blog"}
        title2={"pages"}
        currentpage={"blog"}
      />
    </div>
  );
};

export default page;
