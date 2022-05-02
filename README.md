[TOC]

# 快速上手

1. 创建新的模块

   1. 创建新模块目录

      ```bash
      mkdir -p src/modules/Test
      ```

   2. 创建新模块 `index.ts`

      ```bash
      touch src/modules/index.ts
      ```

      ```typescript
      // src/modules/index.ts
      export * from './Test'
      ```

   3. 创建新模块 `Test.ts`
      ```bash
      touch src/modules/Test.tsx
      ```
      ```typescript
      // src/modules/Test.tsx
      export const Test = () => <h1>Test</h1>
      ```

2. 配置路由
   1. 编辑路由文件 `src/routers/routes.tsx`
      ```typescript
      // src/routers/routes.tsx
      // 配置到指定位置中
      import { Test } from '../modules'
      // ...
      {
        path: 'test',
        key: '/test',
        element: <Test />,
      },
      ```

# 目录结构

```bash
src
  - components # 公用组件
  - constants # 常量
  - helpers # 当前项目内的一些帮助方法
  - hooks # 公用 hooks
  - modules # 项目模块
    - hooks # 当前模块内 hooks
    - components # 当前模板内 components
    - helpers # 当前模板内 helpers
    - reducer # 当前模板内的 reducer
  - pages # 单独的页面，如404、登录页面
  - services # 公用服务数据处理
  - utils # 一些通用方法，可跨项目使用
```

# 解决方案

1. 图标
