import React, { useEffect } from 'react';
import { fetchContentData } from '@/services/firebase.service';
import ModifyContentForm from '../../forms/modifyContentForm/modifyContentForm';

const ModifyContentTab = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [contentData, setContentData] = React.useState<any>(null);

  useEffect(() => {
    fetchContentData().then((data) => setContentData(data));
  }, []);

  return <div>{contentData && <ModifyContentForm data={contentData} />}</div>;
};

export default ModifyContentTab;
