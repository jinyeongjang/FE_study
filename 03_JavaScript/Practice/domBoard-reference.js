const posts = [
    {
        nickname: '곰돌쓰',
        title: 'DOM 게시판을 오픈했습니다!',
        content: '다양한 글 많이 남겨주세요~! ^-^*'
    },
    {
        nickname: '심심하면 짖는 갱얼쥐',
        title: '왈왈왈왈',
        content: '왈왈왈왈!! 왈!! 왈왈와를르왈!!!'
    },
    {
        nickname: '배고픈사람',
        title: '저녁 메뉴 추천 받습니다',
        content: '뭘 먹으면 좋을까요? 강남 근처면 더 좋아요'
    },
    {
        nickname: '심심하면 짖는 갱얼쥐',
        title: '왈왈왈왈',
        content: '왈왈왈왈!! 왈왈와를르왈!!! 왈!! 왈왈와를르왈!!! 왈왈왈!! 왈왈왈!! 왈!! 왈왈와를르왈!!! 왈왈와를르왈!!!'
    },
    {
        nickname: '심심하면 짖는 갱얼쥐',
        title: '왈왈왈왈',
        content: '왈왈왈왈!! 왈!! 왈왈와를르왈!!! 왈왈왈!! 왈왈와를르왈!!! 왈왈왈!! 왈!! 왈왈와를르왈!!!'
    },
    {
        nickname: '심심하면 짖는 갱얼쥐',
        title: '왈왈왈왈',
        content: '왈왈왈왈!! 왈!! 왈왈왈!! 왈왈왈!! 왈!! 왈왈와를르왈!!! 왈왈왈!! 왈왈왈!! 왈!! 왈왈와를르왈!!!'
    },
    {
        nickname: '곰돌쓰',
        title: '갱얼쥐님 도배하지 마세요',
        content: '자꾸 도배하시면 글 삭제합니다'
    },
    {
        nickname: '미식가',
        title: '강남역 근처 맛집 추천',
        content: '고기 좋아하시면 OOOO 한번 가보세요. 국물요리 땡기시면 XXXX도 좋구요!'
    },
    {
        nickname: '배고픈사람',
        title: '미식가님 감사합니다',
        content: 'OOOO 다녀왔는데 정말 맛있더라구요. 추천 감사합니다'
    },
    {
        nickname: '심심하면 짖는 갱얼쥐',
        title: '왈왈왈왈',
        content: '왈왈왈왈!! 왈!! 왈왈와를르왈!!! 왈왈왈!! 왈왈왈!! 왈!! 왈왈와를르왈!!! 왈왈왈!! 왈왈왈!! 왈!! 왈왈와를르왈!!!'
    },
    {
        nickname: '심심하면 짖는 갱얼쥐',
        title: '왈왈왈왈',
        content: '왈왈왈왈!! 왈!! 왈왈와를르왈!!! 왈왈왈!! 왈왈왈!! 왈!! 왈왈와를르왈!!! 왈왈와를르왈!!! 왈왈왈!! 왈왈왈!! 왈!! 왈왈와를르왈!!!'
    },
    {
        nickname: '심심하면 짖는 갱얼쥐',
        title: '왈왈왈왈',
        content: '왈왈왈왈!! 왈왈와를르왈!!! 왈왈왈!! 왈왈왈!! 왈!! 왈왈와를르왈!!! 왈!! 왈왈와를르왈!!! 왈왈왈!! 왈왈왈!! 왈!! 왈왈와를르왈!!!  왈!!'
    }
]



// 1. 화면에 게시글을 추가해보세요

for (let i = 0; i < posts.length; i++) {
    const post = posts[i]

    let section = document.createElement('section')
    section.setAttribute('class', 'post')

    let title = document.createElement('div') 
    title.setAttribute('class', 'title')
    title.textContent = post.title

    let nickname = document.createElement('div')
    nickname.setAttribute('class', 'nickname')
    nickname.textContent = post.nickname

    let content = document.createElement('div')
    content.setAttribute('class', 'content')
    content.textContent = post.content

    section.append(title, nickname, content)

    document.querySelector('#posts').append(section)
}



// 2. 도배글을 지워주세요
const domPosts = document.querySelectorAll('.post')

for (let i = 0; i < domPosts.length; i++) {
    if( domPosts[i].children[1].textContent === '심심하면 짖는 갱얼쥐' ) {
        domPosts[i].remove()
    }
}



// 3. 도배글을 삭제했다는 글을 추가해주세요
let section = document.createElement('section')
    section.setAttribute('class', 'post')

    let title = document.createElement('div') 
    title.setAttribute('class', 'title')
    title.textContent = '갱얼쥐님 글 삭제했습니다'

    let nickname = document.createElement('div')
    nickname.setAttribute('class', 'nickname')
    nickname.textContent = '곰돌쓰'

    let content = document.createElement('div')
    content.setAttribute('class', 'content')
    content.textContent = '갱얼쥐님 경고했는데도 도배하셔서 게시글 삭제했습니다'

    section.append(title, nickname, content)

    document.querySelector('#posts').append(section)