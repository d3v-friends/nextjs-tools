# nextjs-tools

# prefix

- fn: 클라이언트, 서버 사이드에서 모두 사용 가능
- get/set : 서버 사이드에서만 사용하는 기능
- fetch/query: 서버 사이드에서만 사용하는 기능
- use: 클라이언트 에서만 사용 가능

* package.json
	- 다음과 같은 방식으로 불러와서 사용가능. git-tag 으로 버전 관리한다.

~~~json
{
  "dependencies": {
    "nextjs-tools": "git+https://github.com/d3v-friends/nextjs-tools#0.1.3"
  }
}
~~~