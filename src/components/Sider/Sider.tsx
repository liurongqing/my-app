import { Layout, Menu } from 'antd'
import { menus } from './data'

const { Sider } = Layout

export const SiderComponent = () => {
  return (
    <Sider className="overflow-y-auto" breakpoint="lg" collapsedWidth="0">
      <div className="h-8 m-6 bg-white/20"></div>
      <Menu theme="dark" mode="inline" items={menus} />
    </Sider>
  )
}
