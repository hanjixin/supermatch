import React from 'react'
// 组件
import Ranking from '../../../components/Ranking'

const RankingBox = () => {
  const props = {
    lists: [
      {
        path: 'https://mkt.kaikeba.com/vipcourse/javaee',
        title: 'JavaEE企业级开发工程师',
        iconText: '新',
        number: 1,
        clickNum: 182888123,
      },
      {
        path: 'https://mkt.kaikeba.com/vipcourse/javaee',
        title: '百万架构师',
        number: 2,
        clickNum: 82888123,
      },
      {
        path: 'https://mkt.kaikeba.com/vipcourse/javaee',
        title: 'Web前端高级工程师',
        number: 3,
        clickNum: 76888123,
      },
      {
        path: 'https://mkt.kaikeba.com/vipcourse/javaee',
        title: 'Web全栈架构师',
        number: 4,
        clickNum: 4612345,
      },
      {
        path: 'https://mkt.kaikeba.com/vipcourse/javaee',
        title: 'JavaEE软件开发工程师大学生班',
        number: 5,
        clickNum: 912345,
      },
      {
        path: 'https://mkt.kaikeba.com/vipcourse/javaee',
        title: '大数据高级开发工程师',
        number: 6,
        clickNum: 392345,
      },
      {
        path: 'https://mkt.kaikeba.com/vipcourse/javaee',
        title: 'JavaEE企业级高级架构师',
        number: 7,
        clickNum: 329845,
      },
      {
        path: 'https://mkt.kaikeba.com/vipcourse/javaee',
        title: '前端全栈开发工程师大学生班',
        number: 8,
        clickNum: 198912,
      },
      {
        path: 'https://mkt.kaikeba.com/vipcourse/javaee',
        title: '数据分析全栈工程师',
        number: 9,
        clickNum: 119922,
      },
      {
        path: 'https://mkt.kaikeba.com/vipcourse/javaee',
        title: '数据挖掘工程师实战',
        number: 10,
        clickNum: 107922,
      },
      {
        path: 'https://mkt.kaikeba.com/vipcourse/javaee',
        title: '0 基础 Python 系列课',
        number: 11,
        clickNum: 84627,
      },
      {
        path: 'https://mkt.kaikeba.com/vipcourse/javaee',
        title: 'Python 人工智能大学生班',
        number: 12,
        clickNum: 9876,
      },
    ],
    topNum:  5 ,
    width: '400px',
    show:  true,
  }
  return <Ranking {...props} />
}

export default RankingBox
