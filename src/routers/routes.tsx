// 根路径
import { LayoutComponent } from '@/components/Layout'

// 组件
import { UserList1, UserList2 } from '@/modules'

// 页面
import { NotFound } from '@/pages'

export const routes = [
  {
    path: '/',
    key: '/',
    element: <LayoutComponent />,
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
