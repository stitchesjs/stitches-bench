import dynamic from 'next/dynamic';

const SierpinskiTriangle = () => {
  const VETest = dynamic(() => import('../../bench/mount-deep-tree/vanilla-extract'), { ssr: false });

  return <VETest />;
};

export default SierpinskiTriangle;
