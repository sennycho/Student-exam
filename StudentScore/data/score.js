import Score from'../db/db.js';

// 데이터베이스와 상호작용해서 학생 성적 등록/수정/삭제

// 학생 성적 생성
const createScore = async ({ studentId, javaScore, pythonScore, cScore, registeredDate }) => {
    try {
        // 총점과 평균 계산
        const totalScore = javaScore + pythonScore + cScore;
        const averageScore = totalScore / 3;

        const score = await Score.create({ // 데이터베이스에 새로운 성적 추가
            javaScore,
            pythonScore,
            cScore,
            registeredDate,
            totalScore,
            averageScore,
            studentId,
        });

        return score;
    } catch (error) {
        throw error;
    }
};

// 학생 성적 수정
const updateScore = async ({ studentId, scoreId, javaScore, pythonScore, cScore }) => {
    try {
        // 총점과 평균 계산
        const totalScore = javaScore + pythonScore + cScore;
        const averageScore = totalScore / 3;

        await Score.update(  // 데이터베이스에서 해당 학생의 성적 업데이트
            { javaScore, pythonScore, cScore, totalScore, averageScore },
            { where: { id: scoreId, studentId } }
        );
    } catch (error) {
        throw error;
    }
};

// 학생 성적 삭제
const deleteScore = async ({ studentId, scoreId }) => {
    try {
        await Score.destroy({  // 해당 학생의 성적 삭제 
            where: { id: scoreId, studentId }
        });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createScore,
    updateScore,
    deleteScore,
};
