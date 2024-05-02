const express = require('express');
const PORT = 4000;
const path = require('path');
const UsersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');

const app = express();
// 템플릿 엔진 서버 등록.
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();
    const diffTime = Date.now() - start;
    console.log(`end:${req.method} ${req.baseUrl}${req.url} ${diffTime}ms`);
});

app.get('/', (req, res) => {
    res.render('index', {
        imageTitle: 'It is a busan',
    });
});

app.use('/users', UsersRouter);
app.use('/posts', postsRouter);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
