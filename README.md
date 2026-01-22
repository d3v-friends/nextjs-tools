# nextjs-tools

# prefix

- fetch/query: 서버 사이드에서만 사용하는 기능
- use*: 클라이언트 에서만 사용 가능 (hook)

* package.json
    - 다음과 같은 방식으로 불러와서 사용가능. git-tag 으로 버전 관리한다.

~~~json
{
  "dependencies": {
    "nextjs-tools": "git+https://github.com/d3v-friends/nextjs-tools#3.0.4"
  }
}
~~~

* 참고 자료
* html 표준 태그 적극 사용하기
  [모질라 사이트](https://developer.mozilla.org/ko/docs/Glossary/Semantics)