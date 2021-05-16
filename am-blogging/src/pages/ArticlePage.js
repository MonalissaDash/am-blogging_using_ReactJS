import React,{useState,useEffect} from 'react';
import articleContent from './article-content'
import ArticlesList from '../components/ArticlesList'
import CommentsList from '../components/CommentsList'
import NotFoundPage from './NotFoundPages'
import '../App.css'
import UpvotesSection from '../components/UpvotesSection';

const ArticlePage = ({match}) => {
    const name=match.params.name;
    const article= articleContent.find(article =>article.name===name);
    const [articleInfo,setarticleInfo]=useState({upvotes:0,comments:[]});

    useEffect(()=>{
        const fetchData=async () =>{
                // const result= await fetch(`http://localhost:8000/api/articles/${name}`)
                const result= await fetch(`/api/articles/${name}`);
                const body = await result.json();
                setarticleInfo(body);
        }
        fetchData();
        // setarticleInfo({upvotes:Math.ceil(Math.random()*10)},[name]);
    })

    if (!article) return <NotFoundPage/>
    const otherArticles = articleContent.filter(article=>article.name!==name)
    return(
        <>
        <h1>{article.title}</h1>
        <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setarticleInfo}/>
        {article.content.map((paragraph,key)=>(
        <p key={key}>{paragraph}</p>
        ))}
        <CommentsList comments={articleInfo.comments}/>
        <h3>Other Articles to explore!!-------------------&#128221;</h3>
        <ArticlesList articles={otherArticles}/>
    
        </>
        );
};

export default ArticlePage;