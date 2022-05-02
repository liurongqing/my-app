import { Link } from 'react-router-dom'
export const menus = [
  {
    key: '1',
    label: '用户管理',
    children: [
      {
        key: '1-1',
        label: <Link to="/user1">用户列表</Link>,
      },
    ],
  },
  {
    key: '2',
    label: '系统设置',
    children: [
      {
        key: '2-1',
        label: <Link to="/user2">设置</Link>,
      },
    ],
  },
]
