const express=require("express");
const app=express();
const hbs=require("hbs");
const port=process.env.PORT || 8000;
const path=require("path");

const pathData=path.join(__dirname,"public");
// console.log(pathData);

app.set("views" , "hamza")
app.set("view engine","hbs");
hbs.registerPartials("hamza/partials");
app.use(express.static(pathData));

app.get("/",(req,res)=>{
res.render("main",{
    body:"show the power "
});
});
app.get("/about",(req,res)=>{
res.render("about",{
    body:"show the power "
});
});
app.get("/weather",(req,res)=>{
res.render("weather",{
    body:"show the power "
});
});
app.get("*",(req,res)=>{
    res.render("404",
    {
        showMsg:"This is 404 Page"
    });
});
// Here i set my live server at port 8000 ☝️ by upper setting command 🆗
// best of luck 💥
app.listen(port,()=>{
    console.log(`listening at the port of ${port}`);
}); 


// const http=require("http");
// const fs=require("fs");
// const path=require("path");
// const requests=require("requests");
// const { json } = require("express");

// // const data1=JSON.stringify(array);
// // console.log(data1);
// fs.readFile("data.json","utf-8",(err,data)=>{
//     const data1=JSON.parse(data);
//     console.log(data1.name);
// });

// // // console.log(homeFile);
// // const json=JSON.stringify(homeFile.toString());
// // const arrData=[json];
// // console.log(arrData);


// const passData= (preVal, LatVal)=>{
//     let tempVal=preVal.replace("{%welcome%}",LatVal.main.temp);
//     return tempVal;
// }

// const server=http.createServer((req,res)=>{

// });
// server.listen(8000,()=>{

//     console.log("listening at the port 8000");
// })




// if(req.url=="/"){
//     requests(`http://api.openweathermap.org/data/2.5/weather?q=multan&units=metric&appid=6b0ea8447b0ba9a51d7204827e4517bf`).on("data",(chunk)=>{
//         const org_data=JSON.parse(chunk);
//         const arrData=[org_data];

//         const realData=arrData.map((val)=>{
//             return passData(homeFile,val);
//         }).join("");
//         res.write(realData);
//     }).on("end",(err)=>{
//         if (err) return console.log(`there is an error !!`);
//         res.end();
//     })
// }