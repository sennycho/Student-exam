import express from "express";
const router = express.Router();  // express 모듈을 가져와서 라우터 객체를 생성하고 성적관련 컨트롤러 가져오기
import student from'../controller/student.js';
import score from'../controller/score.js';

// API엔드포인트 정의

// 학생 등록
router.post('/', student.createStudent);

// 학생 정보 수정
router.put('/:id', student.updateStudent);

// 학생 정보 삭제
router.delete('/:id', student.deleteStudent);

// 학번으로 학생 검색
router.get('/:id', student.getStudent);

// 학생 점수 등록
router.post('/:id/scores', score.createScore);

// 학생 성적 수정
router.put('/:studentId/scores/:scoreId', score.updateScore);

// 학생 성적 삭제
router.delete('/:studentId/scores/:scoreId', score.deleteScore);

// 라우터 내보내기
export default router;
