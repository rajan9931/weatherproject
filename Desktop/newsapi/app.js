const SportsApiURL=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=02b9977684d24c1fbf988b991f30c829`;
window.fetch(SportsApiURL).then(data=>{
    data.json().then(sportsnews=>{
        let sportsdata=sportsnews.articles;
        let output='';
        for(let sports of sportsdata){
            output+=`
            
            <h1 class="h1title"><a href="${sports.url}" target=_blank>${sports.title}</a></h1>
            <p>${sports.description}</p>
            <img src="${sports.urlToImage}"/>
            <p>${sports.publishedAt}</p>
            `;
        }
        document.getElementById("left").innerHTML=output;
    }).catch(err=>console.log(err))
}).catch(err=>console.log(err))

//var day=new Date().getVarDate()
setInterval(()=>{
    var time =new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML=time;
},1000);


const enturl=`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=02b9977684d24c1fbf988b991f30c829`;
window.fetch(enturl).then(data=>{
    data.json().then(ent=>{
        let entdata=ent.articles;
        let output='';
        for(let ent of entdata){
            output+=`
            
            <h1 class="h1title"><a href="${ent.url}" target=_blank>${ent.title}</a></h1>
            <p>${ent.description}</p>
            <img src="${ent.urlToImage}"/>
            <p>${ent.publishedAt}</p>
            `;
        }
        document.getElementById("right").innerHTML=output;
    }).catch(err=>console.log(err))
}).catch(err=>console.log(err))


const topnewsurl=`https://newsapi.org/v2/top-headlines?country=us&apiKey=02b9977684d24c1fbf988b991f30c829`;
window.fetch(topnewsurl).then(data=>{
    data.json().then(topnews=>{
        let topnewsdata=topnews.articles;
        let output='';
        for(let topnews of topnewsdata){
            output+=`
            
            <h1 class="h1title"><a href="${topnews.url}" target=_blank>${topnews.title}</a></h1>
            <p>${topnews.description}</p>
            <img src="${topnews.urlToImage}"/>
            <p>${topnews.publishedAt}</p>
            `;
        }
        document.getElementById("middle").innerHTML=output;
    }).catch(err=>console.log(err))
}).catch(err=>console.log(err))
