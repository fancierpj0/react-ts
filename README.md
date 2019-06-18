## 安装依赖
```
npm i react react-dom @types/react @types/react-dom react-router-dom @types/react-router-dom react-transition-group @types/react-transition-group react-swipe @types/react-swipe  -S

npm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D

npm i typescript ts-loader source-map-loader -D

npm i redux react-redux @types/react-redux redux-thunk  redux-logger @types/redux-logger -S

npm i connected-react-router -S

npm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

## 生成ts配置文件
https://www.tslang.cn/docs/home.html
```
tsc --init
```

## ESLint
ESLint 是一款插件化的 JavaScript 静态代码检查工具，ESLint 通过规则来描述具体的检查行为

https://cn.eslint.org/docs/rules/
https://eslint.org/docs/rules/
```
//package.json
//检查当前目录下 以ts结尾的文件
"eslint": "eslint . --ext .ts"


//自动修复
//var 不会帮我们自动修改成 let or const，因为它不知道到底修改成let还是const
"eslint:fix": "eslint . --ext .ts --fix"

```
