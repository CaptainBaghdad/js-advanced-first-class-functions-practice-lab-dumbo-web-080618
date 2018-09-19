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
  const compare = function (a,b) {
    return (a.name).localeCompare(b.name);
  };
  const sortedByName = drivers.slice().sort(compare);
  return sortedByName;
}

const totalRevenue = function(drivers){
  const reduceMe = function(inc,ele,i,arr){
    return inc + ele.revenue;
  }
  
   return drivers.reduce(reduceMe,0);
 
   }
   
   function 
