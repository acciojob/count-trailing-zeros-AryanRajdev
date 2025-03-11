function trailingZeros(n) {
  //your JS code here. If required.
	let count = Math.floor(n/5);

	return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
