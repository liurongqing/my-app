// 根路径
import { App } from '../App'

// 组件
import { UserList1, UserList2 } from '../modules'

// 页面
import { NotFound } from '../pages'

export const routes = [
  {
    path: '/',
    key: '/',
    element: <App />,
    children: [
      {
        path: 'user1',
        key: '/user1',
        element: <UserList1 />,
      },
      {
        path: 'user2',
        key: '/user2',
        element: <UserList2 />,
      },
    ],
  },
  {
    path: 'notfound',
    key: 'notfound',
    element: <NotFound />,
  },
]
