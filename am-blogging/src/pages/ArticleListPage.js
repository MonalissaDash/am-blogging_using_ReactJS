import React from 'react';
import articleContent from './article-content'
import ArticlesList from '../components/ArticlesList'
import '../App.css'

const ArticleListPage =()=>(
    <>
    <div className="Article-list-page">
    <ArticlesList articles={articleContent}/>
    </div>
    </>
);
export default ArticleListPage;