import './App.css';
import 'antd/dist/antd.css';
import VendorSelect from './VendorSelect'
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout className="App-header">
      <Header style={{color: 'white' }}>Casey's Vendor Autocomplete Demo</Header>
      <Content>
        <div className="site-layout-content">
          <VendorSelect />
        </div>
      </Content>
      <Footer>https://github.com/ckriutz/autocomplete-ui-poc</Footer>
    </Layout>

    
  );
}

export default App;
