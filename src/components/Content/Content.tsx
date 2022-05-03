import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

const { Content } = Layout

export const ContentComponent = () => (
  <Layout>
    <Content className="bg-white p-6 my-6 mx-4 overflow-y-auto">
      <Outlet />
    </Content>
  </Layout>
)
