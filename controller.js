require("dotenv").config()
const basicInfo =   (req, res)=>{
  if (!process.env.EMAIL || !process.env.GITHUB_URL){
  
  }
  res.status(200).json({
      email: process.env.EMAIL,
      current_datetime:new Date().toISOString(),
      github_url:process.env.GITHUB_URL
  })
}



module.exports= basicInfo