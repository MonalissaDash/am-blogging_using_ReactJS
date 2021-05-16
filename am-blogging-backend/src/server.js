import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';
//Fake DB--->
// const articleInfo={
//     'learn-react':{
//         upvotes:0,
//         comments:[],
//     },
//     'learn-node':{
//         upvotes:0,
//         comments:[],
//     },
//     'my-thoughts-on-resume':{
//         upvotes:0,
//         comments:[],
//     },
//     }
    
const app=express();

app.use(bodyParser.json());

// app.get('/hello',(req,res)=>res.send('Hello!'));

// // app.post('/hello',(req,res)=>res.send(`Hello! ${req.body.name}!`));
// app.post('/hello/:name',(req,res)=>res.send(`Hello! ${req.params.name}!`));

// to optimise the function
const withDB=async(operations,res)=>{
    try{
        const client= await MongoClient.connect('mongodb://localhost:27017',{UseNewUrlParser:true});
        const db = client.db('am-blogDB');
        await operations(db);
        client.close();
         }catch(error){
             res.status(500).json({message:'Error connection to Db...',error});
         }
}

app.get('/api/articles/:name',async(req,res)=>{
    // try{
        withDB(async(db)=>{
            const articleName=req.params.name;
            const articleInfo=await db.collection('articles').findOne({name:articleName});
            res.status(200).json(articleInfo);
        },res);
//    const articleName=req.params.name;
// //    const client= await MongoClient.connect('mongodb://localhost:27017',{UseNewUrlParser:true});
// //    const db = client.db('am-blogDB');
//    const articleInfo=await db.collection('articles').findOne({name:articleName});
//    res.status(200).json(articleInfo);
//    client.close();
//     }catch(error){
//         res.status(500).json({message:'Error connection to Db...',error});
//     }

});
app.post('/api/articles/:name/upvote',async(req,res)=>{
    withDB(async(db)=>{
        const articleName=req.params.name;
        // articleInfo[articleName].upvotes +=1;(for fake DB)
        // res.status(200).send(`${articleName} now has ${articleInfo[articleName].upvotes} upvote!`)
         const articleInfo=await db.collection('articles').findOne({name:articleName});
         await db.collection('articles').updateOne({name:articleName},
        {
            '$set':{
                upvotes:articleInfo.upvotes+1,
            },
        }
        );
        const updatedArticleInfo=await db.collection('articles').findOne({name:articleName});
        res.status(200).json({updatedArticleInfo});
        
    },res);
    
})

app.post('/api/articles/:name/add-comment',(req,res)=>{
   const {username,text} =req.body;
   const articleName=req.params.name;

   withDB(async(db)=>{
    const articleInfo=await db.collection('articles').findOne({name:articleName});
    await db.collection('articles').updateOne({name:articleName},
    {
        '$set':{
            comments:articleInfo.comments.concat({username,text}),

        },
    });
    const updatedArticleInfo=await db.collection('articles').findOne({name:articleName});
    res.status(200).json({updatedArticleInfo});
        
   }, res);
//    articleInfo[articleName].comments.push({username,text});
//    res.status(200).send(articleInfo[articleName]);
});

app.listen(8000,() =>console.log('Listening on port 8000'));

