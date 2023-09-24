import React from 'react'

function Promicework() {
    let clickwork = () => {

        let v1 = document.querySelector("#v1");
        let myPromise = new Promise(function(resolve,reject){
            v1 =v1.value;
            let x = parseInt(v1)
            if(x >= 5){
                resolve(x);
            }
            else{
                reject(x)
            }
        });
        myPromise.then((x)=>{
            console.log("success",x);
            return x;
        }).then((x)=>{
            console.log("success",x);
        }).catch((x)=>{
            console.log("fail",x)
        })
    }

  return (
    <div id='promicework'>
        <label>Enter you promise value = </label><input type="text" id='v1' /><br/>
        <button id='btn' onClick={clickwork} className='btn btn-success'>click</button>
    </div>
  )
}

export default Promicework