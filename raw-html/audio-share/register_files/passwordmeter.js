function updateMeter()
{
	p = document.getElementById("password").value;
	
	var maxWidth = "200";
	var nScore = this.calcStrength(p);

 	var nRound = Math.round(nScore * 2);
	if (nRound > 100) {
		nRound = 100;
	}

	var scoreWidth = (maxWidth / 100) * nRound;
	
	document.getElementById("scoreBar").style.width = scoreWidth+"px"
}

function calcStrength(p)
{
	var intScore = 0;
	intScore += p.length;
			
	if(p.length > 0 && p.length <= 4) {
		intScore += p.length;
	}
	else if (p.length >= 5 && p.length <= 7) {
		intScore += 6;
	}
	else if (p.length >= 8 && p.length <= 15) {
		intScore += 12;
	}
	else if (p.length >= 16) {
		intScore += 18;
	}
	if (p.match(/[a-z]/)) {
		intScore += 1;
	}
	if (p.match(/[A-Z]/)) {
		intScore += 5;
	}
	if (p.match(/\d/)) {
		intScore += 5;
	}
	if (p.match(/.*\d.*\d.*\d/)) {
		intScore += 5;
	}
	if (p.match(/[!,@,#,$,%,^,&,*,?,_,~]/)) {
		intScore += 5;
	}
	if (p.match(/.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~]/)) {
		intScore += 5;
	}
	if (p.match(/(?=.*[a-z])(?=.*[A-Z])/)) {
		intScore += 2;
	}
	if (p.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/)) {
		intScore += 2;
	}
	if (p.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!,@,#,$,%,^,&,*,?,_,~])/)) {
		intScore += 2;
	}
	return intScore;
}        