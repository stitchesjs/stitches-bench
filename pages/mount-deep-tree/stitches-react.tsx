import dynamic from 'next/dynamic';

const SierpinskiTriangle = () => {
  const StitchesTest = dynamic(() => import('../../bench/mount-deep-tree/stitches-react'), { ssr: false });

  return <StitchesTest />;
};

export default SierpinskiTriangle;
