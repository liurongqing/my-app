import { useEffect, useContext } from 'react'
import { Table, Divider, Button, Form, Input, Space } from 'antd'
import { CommonContext, CommonDispatchContext, ICommonState } from '@/reducers'
import { getUser } from '@/services'
interface IDataType {
  id: string
  name: string
}

export const UserList1 = () => {
  const state = useContext(CommonContext)
  const dispatch = useContext(CommonDispatchContext)

  useEffect(() => {
    getUser({ page: 1 }).then((res: any) => {
      console.log('getuserdata', res)
    })
  }, [])

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

  function handleSearch() {
    dispatch({
      type: 'resetname',
    })
  }

  return (
    <>
      <div className="search-container">
        {state.name}
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
            <Button type="primary" onClick={handleSearch}>
              搜 索
            </Button>
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
