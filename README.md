# 외부 모듈 규칙

* tsc-alias 를 사용하여 절대경로 -> 상대경로 자동 변경 기능 적극 사용한다.

* package.json
	- 다음과 같은 방식으로 불러와서 사용가능. git-tag 으로 버전 관리한다.
    ~~~json
    {
      "dependencies": {
        "nextjs-tools": "git+https://github.com/d3v-friends/nextjs-tools#0.1.3"
      }
    }
    ~~~