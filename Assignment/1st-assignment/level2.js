const seminarTeam = {
    teamMembers: [
        {name: '김영권', location: '부천시청역', age: 25, hobby: '23학점 듣기'},
        {name: '권세훈', location: '역곡역', age: 23, hobby: '킹받게하기'},
        {name: '이제준', location: '개봉역', age: 20, hobby: '술 마시기'},
        {name: '장서현', location: '신도림역', age: 19, hobby: '서버 공부'}
    ],
    introduceMembers: function() {
        console.log('=====6조는 못말려=====');
        this.teamMembers.forEach(member => {
            console.log(`이름은 ${member.name}, 나이는 ${member.age}살, ${member.location}쪽에 살고, 취미는 '${member.hobby}'입니다요`);
        });
    }
}

seminarTeam.introduceMembers();
