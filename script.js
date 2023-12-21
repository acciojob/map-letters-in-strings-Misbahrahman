//your JS code here. If required.


let word = prompt();

let obj = {};
function makeObj() {
	
	for(let i = 0 ; i < word.length ; i++){
		let char = word.charAt(i);
		if(!(char in obj)){
			obj[char] = [];
		}
		
		obj[char].push(i);
	}

	return obj;
}

alert(JSON.stringify(makeObj()));
