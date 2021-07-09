const fs = require('fs')

fs.readFile('./test.txt',(err,data)=>{
	if(err){
		console.log(err);
	}
	if(data){
		let up_value = 0;
		let down_value = 0;
		info = data.toString();
		info.split('').forEach(ch =>{
			if(ch === '('){
				up_value +=1;
			}
			if(ch===')'){
				down_value +=1;
			}
		})

		const final_value = up_value - down_value;
		console.log(final_value);
	}
	}

)


