import { Student } from'../db/db.js';

// 학생 등록
const createStudent = async ({ studentId, name, contact, email, address, registeredDate }) => {
    try {
        const student = await Student.create({ // 데이터베이스 작업 비동기적으로 처리
            studentId,
            name,
            contact,
            email,
            address,
            registeredDate,
        });

        return student;
    } catch (error) {
        throw error;
    }
};

// 학생 정보 수정
const updateStudent = async ({ studentId, name, contact, email, address }) => {
    try {
        await Student.update(
            { name, contact, email, address },
            { where: { studentId } }
        );
    } catch (error) {
        throw error;
    }
};

// 학생 정보 삭제
const deleteStudent = async (studentId) => {
    try {
        await Student.destroy({ where: { studentId } });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createStudent,
    updateStudent,
    deleteStudent,
};