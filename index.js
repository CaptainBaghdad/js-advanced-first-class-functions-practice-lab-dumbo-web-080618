// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(ele){
    console.log(ele.name);
    
    
  });
  
  
}

function logDriversByHometown(drivers, location){
  drivers.forEach(function(ele){
    if(ele.hometown == location){
      console.log(ele.name);
      
    }
    
  });
  
}

function driversByRevenue(drivers){

  let ans =  drivers.slice().sort(function(ele1,ele2){
    return ele1.revenue - ele2.revenue;
    
    
    
  });
  
  return ans;
  
}


function driversByName(drivers){
  let arr = [];
  
  drivers.forEach(function(ele){
   arr.push(ele.name.values);    
  });
  
 let sarr = arr.sort(function(a,b){
   
   
 });
}
