# 旅遊計劃網頁應用程式 Travel Plan Web Application   

## 簡介
這是一個簡易的文字記錄旅遊規劃網站，使用者可以根據時間來設定行程和工作。詳細操作請閱讀附帶的 PDF 文件。

## 介面
電腦端  
![image]()
手機端  
![image]()

## 使用功能
- **行程規劃**: 能夠規劃行程時間，類似於紀錄表的功能。
- **行程管理**: 根據名稱、時間、時程區段建立多個行程表，並支援查詢和更改。
- **本地存儲**: 所有資料保存在本地，即使關閉瀏覽器，資料也會保留，除非手動刪除或更換瀏覽器。
- **多用途**: 除了旅遊規劃外，還可用作日程表、課表、短期計劃、日記等。
- **目前限制**: 目前不支援資料的匯入和匯出功能。

## 製作目的
最初的構想是為了在出遊時預先寫下計劃，並標註時間點，以便查看。然而，在網上找不到類似且方便的應用程式或網頁，只能手動一個個寫上去。因此，我決定利用瀏覽器的存儲功能，製作一個可以呈現類似留言板列表的應用，同時練習使用 Vue 框架。

除了記錄行程外，這個應用還可以用作日程表、課表和學習計劃，方便查看和管理。

## 使用指南
1. **添加行程**:
    - 輸入行程名稱、時間和時程區段。
    - 點擊**新增旅遊行程**按鈕保存行程。
2. **查看和編輯行程**:
    - 點擊**行程數**按鈕可查看目前資料數
    - 點擊**查看旅行列表**可顯示所有列表
    - 在列表中找到要查看或編輯的行程。
    - 點擊**選取旅程編號**進行編輯。
    - 點選**編輯旅遊詳情**完成更改。
3. **刪除行程**:
    - 在列表中找到要刪除的行程。
    - 點擊**刪除行程**按鈕進行選擇。
    - 完成後可以查看列表是否刪除。
    - 點擊**刪除所有行程**按鈕將會刪除所有資料。


## 技術棧
- **前端**: Vue.js, HTML, CSS, RWD
- **本地存儲**: LocalStorage

## TODO
- 實現資料的匯入和匯出功能。
- 增加用戶登錄和多設備同步功能。
- 優化界面設計，提升用戶體驗。

## 貢獻
歡迎任何形式的貢獻！請提交 Pull Request 或提出 Issue。
