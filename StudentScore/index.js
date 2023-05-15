import express from "express";
import cors from 'cors';
import studentRouter from './router/student.js';
import bodyParser from 'body-parser';


// express 애플리케이션 생성
const app = express();


// 미들웨어 사용
app.use(express.json());
app.use(bodyParser.json());  //JSON형식의 요청 데이터 파싱
app.use(cors());

// 라우터 등록
app.use('/students', studentRouter);

app.use((req, res, next) => {
    res.sendStatus(404);  // 요청 경로에 해당하는 라우터가 없는 경우 404 상태 코드를 반환
});

// 오류처리 미들웨어
app.use((error, req, res, next) => {
    console.log(error);
    res.sendStatus(500)   
});  // 오류 내용을 로그에 출력하고 500상태 코드를 반환

// 서버 시작
app.listen(3000, () => {    // 서버를 3000포트에서 시작 
    console.log('서버가 시작되었습니다.');  // 서버가 시작되면 메세지 출력
});
