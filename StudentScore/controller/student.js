import Student from '../data/student.js';

// 학생 등록하는 함수
const createStudent = async (req, res) => {
    try {
        const { studentId, name, contact, email, address, registeredDate } = req.body;

        const student = await Student.createStudent({ //학생 데이터 생성
            studentId,
            name,
            contact,
            email,
            address,
            registeredDate,
        });
        // 성공적으로 생성되면 생성된 학생 정보를 JSON형태로 응답함
        res.json(student);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

// 학생 정보 수정하는 함수
const updateStudent = async (req, res) => {
    try {
        const studentId = req.params.id;
        const { name, contact, email, address } = req.body;

        await Student.updateStudent({
            studentId,
            name,
            contact,
            email,
            address,
        });
        // 성공적으로 업데이트 되면 메세지 응답
        res.send('학생 정보가 업데이트되었습니다.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');  // 에러 발생시 콘솔에 출력
    }
};

// 학생 정보 삭제하는 함수
const deleteStudent = async (req, res) => {
    try {
        const studentId = req.params.id; // 학생 아이디를 받아옴

        await Student.deleteStudent(studentId); // 학생 아이디가 있는 곳의 정보를 삭제한다
        // 성공적으로 삭제되면 메세지 응답
        res.send('학생 정보와 성적이 삭제되었습니다.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error'); // 에러 발생시 콘솔에 출력
    }
};

module.exports = {
    createStudent,
    updateStudent,
    deleteStudent,
};
