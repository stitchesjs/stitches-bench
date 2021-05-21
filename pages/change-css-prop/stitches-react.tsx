import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const StitchesTest = dynamic(() => import('../../bench/change-css-prop/stitches-react'), { ssr: false });

  return <StitchesTest />;
};

export default CreateAndMountComponent;
