import { Layout } from 'antd'
import { SiderComponent } from '../Sider'
import { ContentComponent } from '../Content'
import styles from './Layout.module.css'

export const LayoutComponent = () => (
  <Layout className={styles.layoutContainer}>
    <SiderComponent />
    <ContentComponent />
  </Layout>
)
