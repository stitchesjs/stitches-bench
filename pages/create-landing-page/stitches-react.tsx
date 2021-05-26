import dynamic from 'next/dynamic';

const CreateLandingPage = () => {
  const StitchesTest = dynamic(() => import('../../bench/create-landing-page/stitches-react'), { ssr: false });

  return <StitchesTest />;
};

export default CreateLandingPage;
