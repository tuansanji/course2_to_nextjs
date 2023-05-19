import { GetServerSideProps } from "next";

const AboutPage = () => {
  return <div>about page</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default AboutPage;
