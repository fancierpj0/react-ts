module.exports = {
    //↓解析器   配置ts风格解析器
    "parser":"@typescript-eslint/parser"
    ,"plugins":[
        "@typescript-eslint"
    ]
    ,"rules":{
        //如果使用了var会报一个错误
        "no-var":"error"
        //不允许有额外的分号 ,有的话报错
        ,"no-extra-semi":"error"
        //换行缩进为2个，否则报错
        ,"@typescript-eslint/indent":["error",2]
    }
}
