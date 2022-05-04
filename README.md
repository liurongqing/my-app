---
title: 管理后台与移动端解决方案
date: 2022-05-04
---

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

# CSS 使用

1. 正常 css 导入

   创建 `Test.css` 文件

   ```css
   .logo {
   }
   ```

   ```typescript
   // 在 Test.tsx 文件中
   import './Test.css'
   export const Test = () => {
     return <div className="logo"></div>
   }
   ```

2. 模块化 css

   创建 `Test.module.css` 文件

   ```css
   .logo {
   }
   ```

   ```typescript
   // 在 Test.tsx 文件中
   import styles from './Test.module.css'
   export const Test = () => {
     return <div className={styles.logo}></div>
   }
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

- [ ] 图标
- [x] css 
   
   > 引用 `tailwindcss`
   > 管理后台尽力做到不写一行 `css`
   
   1. 安装
   
      ```bash
      npm install tailwindcss -D
      ```
   
   2. 引入
   
      ```css
      /* @tailwind base;  */
      @tailwind components;
      @tailwind utilities;
      ```
   
   3. 使用
   
      ```html
      <div className="p-6"></div>
      ```
   
      
- [x] 接口请求

   > 已经封装好， 详情另写
- [ ] 状态管理 useReducer useContext
- [ ] 完美的 Loading
- [ ] 移动端 PWA
- [ ] TSDOC文档
   参考链接：https://tsdoc.org/pages/packages/tsdoc/
- [ ] 表单解决方案：显示最基本， 然后自定义，然后联动
- [x] 别名

   1. 安装  
      ```bash
      npm install @craco/craco -D
      ```

   2. 配置 `craco.config.js`  
      ```javascript
      const path = require('path')
      module.exports = {
         webpack: {
            alias: {
               '@': path.resolve(__dirname, 'src'),
            },
         },
      }
      ```
   3. 配置 `tsconfig.json`    
      ```json
      {
         "compilerOptions": {
            "baseUrl": "./",
            "paths": {
               "@/*": ["./src/*"]
            }
         }
      }
      ```

   



# 遇到的一些问题

1. 浏览器提示 `Unknown at rule @tailwindcss(unknownAtRules)`  
   解决方法：VSCode 安装 `PostCSS Language Support` 插件
