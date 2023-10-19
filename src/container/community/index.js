import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

//=========

//======

let IMG = document.createElement('img')
IMG.src = '/img/image_layout.png'
IMG.width = 343
IMG.height = 160

let div1 = document.createElement('div')
div1.append(IMG)
page.append(div1)

//===========

const POST_LIST = [
  {
    category: [{ text: 'Що таке база знань?', id: 1 }],
    info: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. ',
    viewed: false,
  },
  {
    category: [
      { text: 'Перейти до комьюніті в Telegram', id: 2 },
    ],
    info: '',
    date: '',
    viewed: true,
  },
]

const createPost = () => {
  const postList = createElement('main', 'post__list')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed
        ? 'post button post--viewed'
        : 'post button',
    )
    const postHeader = createElement('div', 'post__header')

    //===========

    const categoryList = createElement(
      'div',
      'post__category-list',
    )
    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'span',
        `post__category post__category--${category.id}`,
        category.text,
      )
      categoryList.append(categorySpan)
    })

    //==========

    const dateSpan = createElement(
      'span',
      'post__date',
      postData.date,
    )

    //=====
    postHeader.append(categoryList, dateSpan)

    //========

    const infoParagraph = createElement(
      'p',
      'post__info',
      postData.info,
    )
    post.append(postHeader, infoParagraph)

    //=======

    postList.append(post)
  })

  return postList
}

const post = createPost()
page.append(post)
