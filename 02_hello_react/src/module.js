// 解释： import React, {Component} from 'react' 是如何暴露的
// 同时使用了默认暴露和分别暴露，才能像上面一样去引入
// 默认暴露只能暴露一次，分别暴露可以暴露多次

const React = {a: 1, b: 2}

export class Component {

}

React.Component = Component

export default React
