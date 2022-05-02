import { Layout, Menu } from 'antd'
import { menus } from './data'
import styles from './Sider.module.css'

const { Sider } = Layout

export const SiderComponent = () => {
  return (
    <Sider className={`${styles.siderContainer} overflow-y-auto`} breakpoint="lg" collapsedWidth="0">
      <div className={styles.logo}></div>
      <Menu theme="dark" mode="inline" items={menus} />
    </Sider>
  )
}
