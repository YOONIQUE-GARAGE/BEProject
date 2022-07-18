# BEProject - BE A BE
Geth Private Network and Daemon

![beEther](https://user-images.githubusercontent.com/104405143/179467911-cd2bd883-517c-4abe-b5c3-dccfe64b5ec0.gif)


## Getting Started

### client

1. 패키지를 다운로드 합니다.

```bash
$ npm install
```

2. 리액트를 시작합니다.

```bash
$ npm start
```


### server

1. 패키지를 다운로드 합니다.

```bash
$ npm install
```

2. 로컬에 mysql에 "beEth"의 이름으로 데이터 베이스를 만듭니다.
```bash
$ mysql -u root -p
(비밀번호 입력)

$ create database beEth;
```

3. .env.example을 수정하여 .env로 변경하고, 아래내용을 입력합니다.

```bash
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
```

4. config/config.js에 .env의 내용을 작성합니다.

```bash
"development": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql"
  }
```

5. 프라이빗 노드에서 가상 네트워크를 만들어, 8545포트로 연결합니다

```bash
docker run --cap-add=NET_ADMIN -it -p 8545:8545 --name [컨터에너이름] [이미지이름]
```

6. 데몬을 실행합니다.

```bash
pm2 start daemon.js
```

7. 노드 서버를 시작합니다.

```bash
npm start
```

