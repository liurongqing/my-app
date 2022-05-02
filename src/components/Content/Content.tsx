import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import styles from './Content.module.css'

const { Content } = Layout

export const ContentComponent = () => (
  <Layout>
    <Content className={styles.contentContainer}>
      <Outlet />
    </Content>
  </Layout>
)
