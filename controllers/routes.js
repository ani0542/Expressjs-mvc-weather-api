const axios=require('axios')

const API_KEYS='e3b36ddda5c7e6d15fc91824f78f8057';



exports.renderHomePage=(req,res)=>{
    res.render('index',{
        message:'Express Weather App'
    })
}


exports.renderAboutPage=(req,res)=>{
    res.render('about')
}

exports.getWeather=(req,res)=>{
    // console.log(req.body)
    // console.log(req)

      const city=req.body.city;
      const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEYS}&units=metric`;


      axios.get(url)

            .then((response)=>{
            //  console.log(response.data.main.temp)
             res.render('index',{
                 weather:`It is Currently ${response.data.main.temp}  in ${response.data.name}`
             })

      })
      .catch((err)=>{
          console.log(err)
      })
}