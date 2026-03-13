import express from 'express'

const app=express();

app.get('/',(req,res)=>{
    res.send('home page successfully login')
})



app.get('/api/registrationPage',(req,res)=>{
    res.send(`
      <h1>registration Page</h1>
      <form action="/submit-details" method="POST">
        <input type="text" name="name" placeholder="UserName"><br><br>
        <input type="text" name="name" placeholder="Password"><br><br>
        <button type="submit">Submit</button>
      </form>
    `);
    return res.end(); 
})

if (req.url === '/submit-details' && req.method === 'POST') {

    const Registration =[
    {username:[],Password:[]}
]
}


const PORT=3001;
app.listen(PORT,()=>{
    console.log(`server works successfully http://localhost:${PORT}`)
})