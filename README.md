# 외부 모듈 규칙

* tsc-alias 사용하면 외부에서 불러올때 또 alias 정보가 필요하다
	* src 의 ts 와 중첩되게 compile 하여 생기는 문제
	* 전체적인 구조적(디렉토리 구성) 통일성을 위하여 basic 한 방식으로 모두 상대경로를 쓰는 것으로 변경

* package.json
	- 다음과 같은 방식으로 불러와서 사용가능. git-tag 으로 버전 관리한다.
    ~~~json
    {
      "dependencies": {
        "nextjs-tools": "git+https://github.com/d3v-friends/nextjs-tools#0.1.3"
      }
    }
    ~~~