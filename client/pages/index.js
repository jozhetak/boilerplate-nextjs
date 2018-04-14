// @flow

import withData from '../apollo/withData';
import Layout from '../layouts';
import Hello from '../components/Hello';

import '../styles/style.scss';

const Index = withData(() => (
  <Layout>
    <Hello />
  </Layout>
));

export default Index;
