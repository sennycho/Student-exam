import Sequelize from 'sequelize';

// Sequelize ORM 설정
// sequelize 객체 생성: Sequelize 생성자를 사용해 객체 생성. MySQL데이터베이스와의 연결정보를 전달. (호스트, 데이터베이스이름, 사용자 이름, 비밀번호)
const sequelize = new Sequelize('student', 'username', 'password', {
    dialect: 'mysql',
    host: 'localhost',
    user: 'root', 
    password: '1234',
    database: 'student'
});

// 학생 테이블 모델 정의
const Student = sequelize.define('student', {
    // 학생 테이블의 각 컬럼에 대한 정의 
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,   // 자동증가
        primaryKey: true
    },
    studentId: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    contact: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    registeredDate: {
        type: Sequelize.DATE
    }
});

// 성적 테이블 모델 정의
// score모델 정의.
const Score = sequelize.define('score', {
    // 각 컬럼에 대한 정의 
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    javaScore: {
        type: Sequelize.INTEGER
    },
    pythonScore: {
        type: Sequelize.INTEGER
    },
    cScore: {
        type: Sequelize.INTEGER
    },
    registeredDate: {
        type: Sequelize.DATE
    },
    totalScore: {
        type: Sequelize.INTEGER
    },
    averageScore: {
        type: Sequelize.FLOAT
    }
});

// 학생과 성적 테이블 간의 1:1 관계 설정
// studentId컬럼을 왜래 키로 사용해 두 테이블을 연결
Student.hasOne(Score, { foreignKey: 'studentId' });

// 데이터베이스 연결

Student.sync(); // 학생 모델과 연결된 테이블을 데이터베이스에 동기화

// 객체 모듈로 내보내기. 다른 파일에서 사용할 수 있게!
module.exports = {
    Student,
    Score,
    sequelize,
};

