import Score from '../data/score.js';

// 학생 점수 등록하는 함수. 
const createScore = async (req, res) => {
    try {
        const studentId = req.params.id;
        const { javaScore, pythonScore, cScore, registeredDate } = req.body;

        //데이터 생성하기 
        const score = await Score.createScore({
            studentId,
            javaScore,
            pythonScore,
            cScore,
            registeredDate,
        });
        // 데이터가 생성되면 성적정보를 JSON형태로 응답하기
        res.json(score);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error'); //에러 발생하면 콘솔에 출력하기
    }
};

// 학생 성적 수정
const updateScore = async (req, res) => {
    try {
        const { studentId, scoreId } = req.params;
        const { javaScore, pythonScore, cScore } = req.body;

        await Score.updateScore({
            studentId,
            scoreId,
            javaScore,
            pythonScore,
            cScore,
        });

        // 성공적으로 업데이이트 되면 메세지 응답
        res.send('성적 정보가 업데이트되었습니다.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error'); //에러 발생하면 콘솔에 출력하기 
    }
};

// 학생 성적 삭제
const deleteScore = async (req, res) => {
    try {
        const { studentId, scoreId } = req.params;  //학생 ID, 성적ID 받아옴

        await Score.deleteScore({ studentId, scoreId });

        // 성공적으로 삭제되면 메세지 응답
        res.send('성적 정보가 삭제되었습니다.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error'); //에러 발생하면 콘솔에 출력하기 
    }
};

module.exports = {
    createScore,
    updateScore,
    deleteScore,
};
