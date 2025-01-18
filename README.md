# ログインの実装

- [jwtwebtoken](https://www.npmjs.com/package/jsonwebtoken)を使います。

※Auth0 で使われているライブラリですので信頼があります。

- /src/app/api/auth/login/route.ts を実装して JWT のログイン動作を作ってください。

- JWT で返す値は ID と email が sign されていれば OK です。

- JWT で使う鍵は[こちらで生成](https://jwtsecret.com/generate)できます。

シークレットキーの強度アルゴリズムは問いません。

- 制作された JWT のデコードはこちらで確認できます。
  https://jwt.io/
