import { useEffect, useReducer } from 'react'
import { Table, Divider, Button, Form, Input, Space } from 'antd'
import { getUser } from '@/services'
import { useCommonState, useCommonDispatch } from '@/hooks'
import { initialUser, userReducer } from './reducers'
interface IDataType {
  id: string
  name: string
}

export const UserList1 = () => {
  const state = useCommonState()
  const dispatch = useCommonDispatch()

  const [users, userDispatch] = useReducer(userReducer, initialUser)

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
    userDispatch({
      type: 'added'
    })
    // dispatch({
    //   type: 'setname',
    //   payload: {
    //     name: 'lllll',
    //   },
    // })
  }

  return (
    <>
      <div className="search-container">
        {state.name}
        {users?.map((v) => (
          <li>{v.name}</li>
        ))}
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
