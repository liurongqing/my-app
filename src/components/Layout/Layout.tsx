import { Layout } from 'antd'
import { SiderComponent } from '../Sider'
import { ContentComponent } from '../Content'

export const LayoutComponent = () => (
  <Layout className="h-screen">
    <SiderComponent />
    <ContentComponent />
  </Layout>
)
