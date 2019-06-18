# MyReads项目

这是Udacity的React Fundamentals课程最终评估项目的入门模板。此模板的目标是通过提供可以使用的CSS和HTML标记的静态示例来节省您的时间，但不需要任何完成项目所需的React代码。如果您选择从此模板开始，您的工作将是通过重构此模板中的静态代码来为应用添加交互性。
当然，如果您愿意，您可以从头开始自由地开始这个项目！请务必使用[Create React App]（https://github.com/facebookincubator/create-react-app）来引导项目。
## TL;DR

立即开始开发：

*使用`npm install`安装所有项目依赖项

*使用`npm start`启动开发服务器


##你得到了什么


```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

请记住，良好的React设计实践是为每个组件创建新的JS文件，并使用import / require语句将它们包含在需要它们的位置。
##后端服务器

为了简化您的开发过程，我们提供了一个后端服务器供您进行开发。提供的文件[`BooksAPI.js`]（src / BooksAPI.js）包含在后端执行必要操作所需的方法：

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

*返回一个Promise，它解析为包含一个book对象集合的JSON对象。

*此系列代表您应用中书架中的书籍。

### `update`

Method Signature:

```js
update(book, shelf)
```

* book：`<Object>`至少包含`id`属性

* shelf：`<String>`包含[“wantToRead”，“CurrentlyReading”，“read”]之一

*返回一个Promise，它解析为包含POST请求的响应数据的JSON对象

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`

*返回一个Promise，它解析为一个JSON对象，该对象包含最多20个book对象的集合。

*这些书不知道他们在哪个架子上。它们只是原始结果。在搜索页面上，您需要确保图书具有正确的状态。

## Important
后端API使用一组固定的缓存搜索结果，并且仅限于一组特定的搜索项，可以在[SEARCH_TERMS.md]（SEARCH_TERMS.md）中找到。该术语列表是与后端一起使用的_only_术语，因此如果您对Basket Weaving或Bubble Wrap的搜索没有带来任何结果，请不要感到惊讶。
## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

此存储库是_all_ Udacity学生的入门代码。因此，我们很可能不接受拉取请求。

有关详细信息，请查看[CONTRIBUTING.md]（CONTRIBUTING.md）。
