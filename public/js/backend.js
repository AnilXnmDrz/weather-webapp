
console.log("web page loaded");

submit_location = () => {
  var location = document.querySelector("input").value;
  var error=document.querySelector('#error')
  var success=document.querySelector('#success')
  error.textContent=''
  success.textContent='loading...'

  console.log("btn", location);

  fetch("/weather?location=" + location).then((response) => {
    response.json().then((data) => {
      console.log("received",data);
      if(data.error){
          error.textContent=data.error
          console.log("err exec");
          success.textContent=''
      }
      else{
          console.log(data.temperature);
          let text2display=`${location} current temperature is ${data.temperature} degree ,feels like ${data.feelslike}, ${data.weather}`
        success.textContent=text2display
        error.textContent=''
      }
    })
  });
};
