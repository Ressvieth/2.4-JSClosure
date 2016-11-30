function createData(obj) {

    var data = obj;
    

    return {
    	get: function (key){
 			return data[key];
    	},

 		set: function (key, val){

 			if(key && val) {
				data[key] = val;
 			}
 		} 	
	};
}

var data = createData({});

data.set("name", "Janek");

console.log( data.get("name") );