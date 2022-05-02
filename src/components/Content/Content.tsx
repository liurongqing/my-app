import { Layout } from 'antd'
import styles from './Content.module.css'

const { Content } = Layout

export const ContentComponent = () => (
  <Layout>
    <Content className={styles.contentContainer}>content</Content>
  </Layout>
)
