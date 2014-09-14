# Grunt with middleman

##Usage

### Grobal install

```sh
gem install bundler
gem install middleman
npm install -g grunt-cli
```

### Local install

```sh
bundle install --path=vender/bundle
npm install
```

### watch

```sh
grunt serve
```

- `/source/img/sprite/*.png`の変更を監視し、`/source/img/sprite.png`と`/source/css/var/_sprite.scss`を生成する
- `/source/js/common/*.js`の変更を監視し、common以下のjsを結合して`/source/js/common.js`を生成する

### build

```sh
grunt build
```

- 静的ファイル`html,css,js,img`を`build/`以下にビルドする
- ビルド後html整形、不要ファイル削除、jsの圧縮など本番delpoy用の細かいタスクを行う