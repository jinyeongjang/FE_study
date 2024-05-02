// TODO1: Node.js의 http 모듈과 querystring 모듈을 불러옵니다.
const http = require('http');
const qs = require('querystring');
// HTTP 서버를 생성합니다.
const server = http.createServer((req, res) => {
    // 클라이언트의 요청이 POST 메서드인지 확인합니다.
    if (req.method === 'POST') {
        // TODO2: POST 데이터를 수집하기 위한 변수를 초기화합니다.
        let body = '';

        // TODO3: 데이터가 서버에 도착할 때마다 Buffer 객체를 문자열로 변환하여 body에 추가합니다.
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        // 모든 데이터 수신이 완료되면 이 이벤트가 트리거됩니다.
        req.on('end', () => {
            // TODO4: 수신된 POST 데이터를 파싱합니다.
            const postData = qs.parse(body);
            /* 
        TODO5: 로그인 정보를 검증합니다.
        아이디는 admin, password는 admingogo77인지 확인해야 합니다. */
            if (postData.username === 'admin' && postData.password === 'admingogo77') {
                /* 둘 다 일치할 시 200 코드와 환영한다는 메시지가 나와야 합니다. */
                console.log('환영합니다!');
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>로그인 성공!</h1>'); // 클라이언트 로그인 성공 메시지
            } else {
                console.log('아이디와 비밀번호가 일치하지 않습니다.');
                /* 일치하지 않을 시 401 코드와 실패 메시지를 출력합니다. */
                res.writeHead(401, { 'Content-Type': 'text/html' });
                res.end('<h1>아이디와 비밀번호가 일치하지 않습니다.</h1>');
            }
        });
    }
});

// 서버를 3000번 포트에서 실행합니다.
server.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.'); // 서버 시작을 콘솔에 알립니다.
});
