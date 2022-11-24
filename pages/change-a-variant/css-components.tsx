import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const SCTest = dynamic(() => import('../../bench/change-a-variant/css-components'), { ssr: false });

  return <SCTest />;
};

export default CreateAndMountComponent;
