const errorHandler=(err,req, res, next)=>{
   if (statusCode= err.statusCode)
    {res.status(err.statusCode).json({
        success: false,
        message: err.message
    })

}
  res.send ("Ooops! It appears email or github repo  might be missing")
  
   }



module.exports= errorHandler