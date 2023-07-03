## 1. todoList 案例相关知识点
    a. 拆分组件，实现静态组件，注意： className, style的写法
    b. 动态初始化列表，如何确定将数据放在哪里组件里的state中
      - 某个组件使用： 放在自身的state中
      - 某些组件使用： 放在共同的父组件state中 （官方称此为：状态提升）
    c. 关于父子之间通信：
      - 父组件给子组件通信：通过props传递
      - 子组件给父组件通信：通过props传递，要求父组件提前给子组件传递一个函数
    d. 注意 defaultChecked 和 checked 的区别，类似的还有 defaultValue 和 Value
    e. 状态在哪里，操作状态的方法就在哪里