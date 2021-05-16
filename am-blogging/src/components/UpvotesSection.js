import React from 'react';

const UpvotesSection=({articleName,upvotes,setArticleInfo})=>{
    const upvoteArticle=async(upvotes)=>{
    const result = await fetch(`/api/articles/${articleName}/upvotes`,{
        method:'Post',
    });
    const body = await result.json();
    setArticleInfo(body);
    }
return(
    <div id="upvotes-section">
    <button onClick={() => upvoteArticle()}>Add Upvote</button>
    <p>This post has been upvoted {upvotes} &#128077;times</p>

    </div>
);  
}
export default UpvotesSection;