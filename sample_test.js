Feature('Qiita')
require('dotenv').config()
const env = process.env

Scenario('ログインすると投稿ボタンが表示される', (I) =>{
  I.amOnPage('https://qiita.com/login')
  I.fillField('#identity', env.USERID)
  I.fillField('#password', env.PASSWORD)
  I.click('Qiita にログイン')
  I.see('投稿する')
})

Scenario('ログインすると自分の記事に編集ボタンが表示される', (I) => {
  I.amOnPage('https://qiita.com/login')
  I.fillField('#identity',  env.USERID)
  I.fillField('#password', env.PASSWORD)
  I.click('Qiita にログイン')
  I.click('div.st-Header_loginUser')  // 右上のユーザーアイコン
  I.click('マイページ')
  I.click('ngrokでデプロイ')  // 記事をクリック
  I.see('編集する')
})