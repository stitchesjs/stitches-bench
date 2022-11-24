import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const StitchesTest = dynamic(() => import('../../bench/create-theme/stitches-react'), { ssr: false });

  return <StitchesTest />;
};

export default CreateAndMountComponent;
