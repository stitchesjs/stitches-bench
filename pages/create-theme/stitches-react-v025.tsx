import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const StitchesTest = dynamic(() => import('../../bench/create-theme/stitches-react-v025'), { ssr: false });

  return <StitchesTest />;
};

export default CreateAndMountComponent;
