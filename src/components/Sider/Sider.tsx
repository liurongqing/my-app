import { Layout, Menu } from 'antd'

import styles from './Sider.module.css'

const { Sider } = Layout

export const SiderComponent = () => {
  return (
    <Sider className={styles.siderContainer} breakpoint="lg" collapsedWidth="0">
      <div className={styles.logo}></div>
      <Menu
        theme="dark"
        items={Array.from({ length: 100 }, (_, v) => v).map((item, index) => ({
          key: String(index + 1),
          label: item + index,
        }))}
      />
    </Sider>
  )
}
