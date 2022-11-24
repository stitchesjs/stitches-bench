import dynamic from 'next/dynamic';

const SierpinskiTriangle = () => {
  const SCTest = dynamic(() => import('../../bench/mount-wide-tree/css-components'), { ssr: false });

  return <SCTest />;
};

export default SierpinskiTriangle;
