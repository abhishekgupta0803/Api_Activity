let url = "http://universities.hipolabs.com/search?name="
let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{
  
   let countery = document.querySelector("input").value;
   let cllArr = await getCountery(countery);
   console.log(cllArr);
   show(cllArr);
});

function show(cllArr){
 let list = document.querySelector("#list");
 list.innerHTML ="";
 for(cllg of cllArr){
    let li = document.createElement("li");
    console.log(cllg.name);
    li.innerText = cllg.name;
    list.appendChild(li);
 }

}

async function getCountery(countery){
    try{
      let resp = await axios.get(url+countery);
      return resp.data;

    }catch(error){
        console.log("error");
        return [];
    }
}