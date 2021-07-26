
// console.log("web page loaded");

const submit_location = () => {
  const location = document.querySelector("input").value;
  const errormsg=document.querySelector('#error')
  const success=document.querySelector('#success')
  error.textContent=''
  success.textContent='loading...'

  console.log("btn", location);

  fetch("/weather?location=" + location).then((response) => {
    response.json().then((data) => {
      console.log("received",data);
      if(data.error){
          errormsg.textContent=data.error
          success.textContent=''
      }
      else{
          // console.log(data.temperature);
          let text2display=`${location} current temperature is ${data.temperature} degree ,feels like ${data.feelslike}, ${data.weather}`
        success.textContent=text2display
        errormsg.textContent=''
      }
    })
  });
};
