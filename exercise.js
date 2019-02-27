var exercise = {};

exercise.countRecords = function(dataarray){
var records = 0
    function add(element){
        records++
        }
        
    dataarray.forEach(add);

    console.log(records)
    return records
};

exercise.countDistrictCrimes = function(data,district){
    var count = 0
    function countDistrictCrimes(element){
      if (element[19]== district)
      count++
    }
    data.forEach(countDistrictCrimes);

    console.log(countDistrictCrimes)
    return count
};

exercise.countPrimaryType = function(data,primaryType){
    var theft = 0
    function counttheft(element){
        if (element[13]== primaryType){
            theft++    
        }
        
    }

    data.forEach(counttheft)

    console.log(theft)
    return theft
};

exercise.countLocation = function(data,location){
    var street =0
    function countlocation(element){
        if (element[15]==location)
        street++
    }
    data.forEach(countlocation);
    console.log(street)
    return street
};


exercise.buildLatLngPoint = function(crime){
    //-------------------------------------------
    // YOUR CODE
    // build the point for the given crime
    // 
    // For example:
    //
    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;    
    //-------------------------------------------    
};




