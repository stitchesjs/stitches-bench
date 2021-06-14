import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const StitchesTest = dynamic(() => import('../../bench/create-and-mount-button/stitches-react'), { ssr: false });

  return <StitchesTest />;
};

export default CreateAndMountComponent;
