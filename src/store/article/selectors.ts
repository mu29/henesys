export interface Article {
  id: string,
  title: string,
  author: string,
  commentCount: number,
  createdAt: string,
}

export type ArticleState = {
  articles: Article[];
}
