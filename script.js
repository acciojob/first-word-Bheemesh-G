function firstWord(s) {
  // your code here
	if(s.length===0)
	{
		return s;
		
	}
	 const arr = s.trim().split(" ");
	return arr[0];
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
