const http = require( 'http')

let todos = []

const server = http.createServer ((req, res) => {
    console. log('서버에 요청이 들어왔네요?')
})

server.listen(3000, () => {
    console.log('서버가 열렸어요!')
})
