import React from 'react';
import articleContent from './article-content'
import ArticlesList from '../components/ArticlesList'

const ArticleListPage =()=>(
    <>
    <ArticlesList articles={articleContent}/>

    </>
);
export default ArticleListPage;