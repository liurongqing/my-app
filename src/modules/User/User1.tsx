import { Table, Divider, Button, Form, Input, Space } from 'antd'
interface IDataType {
  id: string
  name: string
}

export const UserList1 = () => {
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
    },
  ]
  const data: IDataType[] = [
    {
      id: '1',
      name: 'lisi',
    },
  ]

  return (
    <>
      <div className="search-container">
        <Form layout="inline">
          <Space wrap>
            <Form.Item label="name">
              <Input />
            </Form.Item>
            <Form.Item label="name">
              <Input />
            </Form.Item>
            <Form.Item label="name">
              <Input />
            </Form.Item>
            <Form.Item label="name">
              <Input />
            </Form.Item>
            <Form.Item label="name">
              <Input />
            </Form.Item>
            <Form.Item label="name">
              <Input />
            </Form.Item>
            <Button>重 置</Button>
            <Button type="primary">搜 索</Button>
          </Space>
        </Form>
      </div>

      <Divider />
      <Space className="mb-2">
        <Button>批量删除</Button>
        <Button type="primary">批量删除</Button>
      </Space>
      <Table rowKey="id" columns={columns} dataSource={data} />
    </>
  )
}
