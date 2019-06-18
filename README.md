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

## pre-commit
```
npm i pre-commit -D
```

```
//package.json
//提交前运行eslint
"pre-commit": ["eslint"],

//如果想强行提交,commit时代上参数
git commit -n (or --no-verify)
```

## 单元测试
Mocha是现在最流行的JavaScript测试框架之一，在浏览器和Node环境都可以使用。

所谓"测试框架"，就是运行测试的工具。通过它，可以为JavaScript应用添加测试，从而保证代码的质量
```
npm i mocha  @types/mocha chai @types/chai ts-node @types/node  --save-dev
```

mocha是当成node环境来运行的(import export不支持，若要支持) ↓

```
//1.tsconfig.json 的 module 要置为 common.js
{
  "compilerOptions": {
    "module": "commonjs"
}
或则 在pakage.json中通过社会组环境变量达到同样的效果
"scripts": {
"test": "set TS_NODE_COMPILER_OPTIONS={\"module\":\"commonjs\"}  && mocha --require ts-node/register --watch --watch-extensions ts test/**/*"
},    

//2. package.json↓
//需要ts-node/register支持
//文件变化后重新进行编译 然后执行test
"test": "mocha --require ts-node/register --watch --watch-extensions ts test/**/*
"
```
### 指定测试脚本文件
mocha命令后面紧跟测试脚本的路径和文件名，可以指定多个测试脚本。

Mocha默认运行test子目录里面的测试脚本。所以，一般都会把测试脚本放在test目录里面，然后执行mocha就不需要参数了

加上--recursive参数，就会执行test子目录下面所有的层的测试用例

命令行指定测试脚本时，可以使用通配符，同时指定多个文件
```
mocha spec/{a,b}.js      执行spec目录下面的a.js和b.js
mocha test/*.js     执行test目录下面的所有文件
mocha test/**/*.js   执行test目录下面任何子目录中、文件后缀名为js的测试脚本
```
### 配置mocha.opts
Mocha允许在test目录下面，放置配置文件mocha.opts，把命令行参数写在里面
```
--require ts-node/register 
--watch 
--watch-extensions ts
test/sum.test.ts
```
### bignumber.js
用来解决小数相加不精确的问题

### 方法调用
```
npm install sinon @types/sinon -D
```

### //@ts-ignore
忽略下一行ts报错
