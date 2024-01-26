function solution(id_pw, db) {
    const [id,pw] = id_pw;
    const user = db.filter(el => el[0] === id)
    
    if(user.length > 0){
      return user[0][1] === pw ? 'login' : 'wrong pw'
    } else {
      return 'fail'
    }
}