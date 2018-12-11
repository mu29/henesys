import React from 'react'
import { connect } from 'react-redux'
import { ArticleList } from 'src/components'
import { ArticleListProps } from 'src/components/article/ArticleList'
import {
  AppState,
  getIsLoading,
} from 'src/store/selectors'

const ArticleListContainer: React.FunctionComponent<ArticleListProps> = props => (
  <ArticleList { ...props } />
)

const mapStateToProps = (state: AppState) => ({
  articles: [{
    id: '1',
    title: '쿰돌이가 늦어서 복구해야할 캐릭은 많네요',
    author: '아르쉐',
    commentCount: 0,
    createdAt: '2018-12-11 16:31:00',
  }, {
    id: '2',
    title: '땅따먹고 인게임',
    author: '도연퀸',
    commentCount: 2,
    createdAt: '2018-12-11 16:25:00',
  }, {
    id: '3',
    title: '당분간 본캐 멈춰야할듯',
    author: '카페모카딘',
    commentCount: 7,
    createdAt: '2018-12-11 16:21:00',
  }, {
    id: '4',
    title: 's랭이 140인 이유',
    author: '국선2',
    commentCount: 1,
    createdAt: '2018-12-11 14:31:00',
  }, {
    id: '5',
    title: '봄봄 프로젝트 펫 레이어 뒤로 안 보내준 이유',
    author: '프로게이머',
    commentCount: 94,
    createdAt: '2018-12-10 16:31:00',
  }, {
    id: '6',
    title: '반년동안의 쿰돌이 - 의문의 1승',
    author: '의지충만',
    commentCount: 12,
    createdAt: '2018-12-09 16:31:00',
  }, {
    id: '7',
    title: '테섭이라 되는',
    author: '연일호',
    commentCount: 4,
    createdAt: '2018-11-11 16:31:00',
  }, {
    id: '8',
    title: '이건 정말 긴 내용인데 한번 용기를 내어 적어 봅니다... 블라블라...',
    author: '기역기',
    commentCount: 2,
    createdAt: '2017-11-11 16:31:00',
  }, {
    id: '9',
    title: '쿰돌했던 과거가 이렇게...',
    author: '형쓰',
    commentCount: 2,
    createdAt: '2017-11-11 16:31:00',
  }],
  isLoading: false,
})

export default connect(mapStateToProps)(ArticleListContainer)
