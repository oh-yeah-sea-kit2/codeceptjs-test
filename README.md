# CodeceptJS

## 環境構築
- Nodeのインストール
https://nodejs.org/ja/download/

- Javaのインストール
https://java.com/ja/download/manual.jsp


```bash
npm install
npx selenium-standalone install
```
### selenium serverを起動
別窓で以下コマンドを実行
```
npx selenium-standalone start
```

## テスト実行
```bash
npx codeceptjs run sample_test.js
```

## Internet Explorerで実行する場合

#### 32bitドライバーをインストール

```bash
npx selenium-standalone install --config=./wdio.browsers.setup.js
```
必要があれば設定ファイルのバージョンを合わせること。

#### IEの設定変更
■SessionNotFoundException(Unexpected error launching Internet Explorer. Protected Mode)

IEのセキュリティタブの保護モードの設定を統一してください
※推奨はすべてにチェックをつけます。
https://rey1229.hatenablog.com/entry/2017/09/05/134227

### テスト実行
selenium server を立ち上げる（32bitドライバで立ち上げ）
```bash
npx selenium-standalone start --drivers.ie.arch=ia32
```

IE用の設定ファイルを指定する。
```bash
npx codeceptjs run sample_test.js --config ./codecept.ie11.conf.js
```
