# TodoList

待辦事項工具

每過一陣子就會有

一些新技術出現

如果要快速了解這些新東西

做一個小專案大概是最快的方法了

使用 Nedb 進行資料庫操作

Nedb 一個使用檔案作為資料庫的工具

一個檔案代表一個資料表

不須額外安裝 mysql oracle 等

這之前接觸到 graphql 這個東西

也趁這次機會 好好理解一下

有文章提到說 這是為了解決 restful 帶來的問題

最後使用完 基本的語法雖然懂了

但沒有感覺到 GraphQL 的特別之處

也在這一次的製作過程中

將和 React 有關的框架一併使用看看

## 架構

主要分成:

### models

* models/save 存放資料
* models/api 提供資料操作方法
* models/schema GraphQL 設定檔
* main_graphql  在這裡組合 models/api 提供的方法 給 view 使用

### view

view 使用以下框架完成

* React
* React-Router
* Redux
* style-component

view/components/
> DayThing - 顯示每日代辦事項 以日期作為參數

> FinishThing - 顯示所有已完成事項

> WaitThing - 顯示所有未完成事項

> NavBar - 上方導覽列

> NavDate - 左側日期連結

> Note - 隨意筆記

> MainRoute - 定義 router 要 render 的 component

index.js 

組合 view 和 路由 

render 出畫面

## Getting Started

        npm install

## Running

啟動
        
        npm run electron

Babel 編譯

         npm run babel

打包於 dist

        npm run builder


## 執行畫面

![執行畫面](https://raw.githubusercontent.com/de-yu/TodoList-electron/master/readmeImg/readme.PNG)

## Built With

* [Nedb](https://github.com/louischatriot/nedb) - 本地儲存資料庫
* [GraphQL](https://graphql.org/) - API 串接介面
* [Babel](https://babeljs.io/) - 將新版本的JavaScript編譯成 ES5
* [React](https://reactjs.org/) - 建構 SPA 的前端框架
* [React-router](https://reacttraining.com/react-router/) - React 路由控制
* [Redux](https://redux.js.org/) - 建立 react 資料流
* [Redux-thunk](https://github.com/reduxjs/redux-thunk) - 在 Redux 執行非同步動作
* [styled-components](https://www.styled-components.com/) - 建立 component 並綁定 css
* [Electron](https://electronjs.org/) - 將網頁打包成應用程式
* [striptags](https://github.com/ericnorris/striptags) - 過濾 html tag
 
