document.addEventListener("DOMContentLoaded",function(){

    const input=document.querySelector('#input')
    const searchButton=document.querySelector('#search')

    function isvalidUsername(username){
        if(username.trim()==''){
            alert("Username field can not be Empty!!  ");
            return false;
        }
        const regex= /^(?!.*[-_]{2})(?![-_])[a-zA-Z0-9-_]{3,15}(?<![-_])$/;
        const isMatching = regex.test(username);
        if(!isMatching){
            alert('Invalid Username!!')
        }
        return isMatching;
    }
    let data=null;

    async function getdata(username){
         const URL=`https://leetcode-stats-api.herokuapp.com/${username}`;
         console.log('start');
         try{
            let response = await fetch(URL)
            if(!response.ok){
                throw new Error("Unable to fetch the User details")
            }
            data =await response.json()
            console.log(data)
         }
         catch(error){
            console.log("No data Found"+ error)
         }
         finally{
            searchButton.textContent="Search";
            searchButton.disabled=false;
         }
         displayUserData(data);
         
    }


    
    document.addEventListener('keydown',function(event){
        if(event.key==="Enter"){
            searchButton.click();
        }
    })

    searchButton.addEventListener('click',function(){
        const username=input.value;
        // console.log(username);
        if(isvalidUsername(username)){
            searchButton.textContent="Searching....";
            searchButton.disabled=true;
            getdata(username);
        }
        
    })

    function updateProgress(total,solved,label,circle){
        document.querySelector(`#${label}`).textContent=`${solved}/${total}`;
        let percentage=(solved/total)*100;
        document.querySelector(circle).style.setProperty("--progress-deg",`${percentage}%`)
        
    }

    function displayUserData(data){
        let totalsolved=data.totalSolved;
        let easySolved=data.easySolved;
        let hardSolved=data.hardSolved;
        let mediumSolved=data.mediumSolved;
        let totalQuestions=data.totalQuestions;
        let totalEasy=data.totalEasy;
        let totalMedium=data.totalMedium;
        let totalHard=data.totalHard;
        let acceptanceRate=data.acceptanceRate;
        let ranking=data.ranking;
        updateProgress(totalEasy,easySolved,"easy","#easyCircle");
        updateProgress(totalMedium,mediumSolved,"medium","#mediumCircle");
        updateProgress(totalHard,hardSolved,"hard","#hardCircle");


        let dataForBox=[{text:"Ranking :",value:ranking},{text:"Acceptance Rate :",value:acceptanceRate},{
            text:"Solved Questions/Total Questions :",value:` ${totalsolved}/${totalQuestions}`
        }]
        // document.querySelector("#box1 p").textContent+=` ${ranking}`;
        // document.querySelector("#box2 p").textContent+= ` ${acceptanceRate}`;
        // document.querySelector("#box3 p").textContent+=` ${totalsolved}/${totalQuestions}`;
        let boxes=document.querySelector("#boxes")
        boxes.innerHTML= dataForBox.map((elem)=>{
                      return `<div style="padding: 2px 4px;
                            margin: 10px;
                            border-radius: 10px;
                            background-color: rgb(217, 169, 80);
                            border: 2px solid rgb(222, 113, 10);
                            width: fit-content;  " class="box">
                            <p>${elem.text} ${elem.value}</p>
                        </div>`
        }).join("")
        
    }



































})