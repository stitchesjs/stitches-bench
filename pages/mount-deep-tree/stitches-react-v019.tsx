import dynamic from 'next/dynamic';

const SierpinskiTriangle = () => {
  const StitchesTest = dynamic(() => import('../../bench/mount-deep-tree/stitches-react-v019'), { ssr: false });

  return <StitchesTest />;
};

export default SierpinskiTriangle;
