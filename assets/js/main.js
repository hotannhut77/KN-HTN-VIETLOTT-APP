
function submitFunc(){
	const eleSoCoDinh = document.getElementById('so-co-dinh');
	let valueSoCoDinh = eleSoCoDinh.value.split(' ');
	
	const eleSoLoai = document.getElementById("so-loai");
	let valueSoLoai = eleSoLoai.value.split(' ');

	const eleSoVe = document.getElementById("so-ve");
	let valueSoVe = Number.parseInt(eleSoVe.value);

	if (valueSoCoDinh[0]=='') valueSoCoDinh=[];
	if(valueSoLoai[0]=='') valueSoLoai=[];
	if(Number.isNaN(valueSoVe)){
		alert("Vui lòng chọn số vé bạn muốn mua !")
	}

	let eleMegaPower = document.getElementById("mega-power");
	let valueMG= eleMegaPower.value;

	let code=[];
	var soSoRandom=6-valueSoCoDinh.length;

	for (let i= 0;i<valueSoVe;i++){
		let codeItem=[];
		for (let j =0;j<soSoRandom;j++){
			let count =0;

			while(count <1){
				let num = Math.floor(Math.random()*valueMG+1);
				if ((valueSoLoai.indexOf(num)== -1)&&(valueSoCoDinh.indexOf(num)==-1)&&(codeItem.indexOf(num)==-1)){
					codeItem.push(num);
					count ++;
				}
				else {continue;}
			}
		}

		for(var m =0;m< valueSoCoDinh.length;m++){

			codeItem.push(valueSoCoDinh[m]);
		}
		code.push(codeItem);
	}
	
	// đổi hết sang kiểu string 
	for(let i=0;i<code.length;i++){
		for(let j=0;j<code[i].length;j++){
			if (code[i][j]<10){
				code[i][j]='0'+ code[i][j];
			}else{
				code[i][j]=''+ code[i][j];

			}
		}
	}

	
	// sắp xếp chuổi 
	for(let i=0;i<code.length;i++){
		for(let j=0;j<code[i].length;j++){
			code[i].sort();
		}
	}

	// tạo các thẻ <li></li>
	let htmlCode = '';
	for(let i=0;i<code.length;i++){
		let codeNum='<li>';
		for(let j=0;j<code[i].length;j++){
			codeNum = codeNum + ' '+code[i][j];
		}
		codeNum += ' </li>'
		htmlCode = htmlCode +' '+ codeNum;
	}
	
	let elementList=document.getElementById('result-list');
	elementList.innerHTML= htmlCode;
}


