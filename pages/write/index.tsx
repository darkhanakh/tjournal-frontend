import { NextPage } from 'next';
import { MainLayout } from '../../layouts/MainLayout';
import { WriteForm } from '../../components';

const WritePage: NextPage = () => {
  return (
    <MainLayout className="main-layout-white" hideComments hideMenu>
      <WriteForm />
    </MainLayout>
  );
};

export default WritePage;
