const fs = require('fs')

function question2(){
	fs.readFile('./test.txt', (err,data) =>{
		if(err){
		console.log(err);
		}
		if(data){
			const information = data.toString();
			const information_array = information.split('');
			let accumulator = 0;
			let counter = 0;
			const answer = information_array.some(ch =>{
				if(ch === '('){
				accumulator+=1;
				}
				else if(ch===')'){
					accumulator-=1;
				}
				
				counter ++;
				return accumulator < 0;

		})

		console.log('Basement entered at : ', counter);

	}	
})
}

question2();


