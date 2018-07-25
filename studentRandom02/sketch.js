
let GA = [
	['Eiad 😀 ', 'images/Eiad_Mosa.jpeg'],
	['Turkey 💀 ','images/Turkey_Salem.png'],
	['Jassem 😜 ','images/Jassem_Saeed.png'],
	['Hussain 👻 ','images/Hussain_Abdullah.png'],
	['Khaled 👨🏻‍🎓 ','images/default.jpg'],
	['Rami 😎 ','images/default.jpg'],
	['Zaid 🤭 ','images/default.jpg'],
	['Salem 👹 ','images/default.jpg'],
	['Saeed 😓 ','images/default.jpg'],
	['Saleh 🤨 ','images/default.jpg'],
	['Abdulrahman Saleh 🤩 ','images/default.jpg'],
	['Abdulrahman Jaber 😑 ','images/default.jpg'],
	['Abdulkareem 🤨 ','images/default.jpg'],
	['Omar Safar 😍 ','images/default.jpg'],
	['Omar Ali ☠️ ','images/default.jpg'],
	['Fadi 😎 ','images/default.jpg'],
	['Fisal 😱 ','images/default.jpg'],
	['Muhammed 🙄 ','images/default.jpg'],
	['Nawaf ✈️ ','images/default.jpg'],
	['Ali 🤡 ','images/Ali_Nasser.png'],
	['Ibrahem 😜 ','images/Ibraheem_Ali.jpeg']
];
//let GA = ['Omar Saeed 👨🏻‍🎓 ', 'Nasser 👻 ', 'Turkey 🤪 ', 'Ahmed J 😈 ','Sultan Epraheem 👨🏻‍🎓 ', 'Ahmed H 😎 ', 'Saqer 🦅 ', 'Ayyedh 😉', 'Abdulelah Abdullah 😀 ', 'Abdulelah Ahmed 👨🏻‍🎓 ', 'Rayan', 'Hamed 😇 ', 'Sultan M 😳', 'Omar Muhammed 👨🏻‍🎓 ', 'Saeed 😘 ', 'Jaafer 🤠 ', 'Naif Saeed 👨🏻‍🎓 ', 'Fisal', 'Rajeh 😍 ', 'Abdulrhman 🙂 ', 'Muhaned', 'Issa 🤨 '];

let studentName;
let choosenStudent;
let studentPic;
let img;
flagStart = false;
let imgs = [];
let studentImage;
let btn;
let gBtn;
let rBtn;
let sBtn;
let pStudents = [];
let fStudents = [];
let sStudents = [];

function setup() {
	noCanvas();
	frameRate(15);


	btn = createButton('start');
	btn.class('btn btn-primary m-2');
	btn.mousePressed(startLoop);

	gBtn = createButton('✔️ GREEN 🥇');
	gBtn.class('btn btn-success');
	gBtn.mousePressed(addPStudent);

	rBtn = createButton('❌ RED 🤬');
	rBtn.class('btn btn-danger m-2');
	rBtn.mousePressed(addFStudent);

	sBtn = createButton('🌟 🌟 STAR 🌟🌟');
	sBtn.class('btn btn-warning');
	sBtn.mousePressed(addSStudent);

	studentPic = select('#studentPic');
	studentImage = new Image(200, 200);
	choosenStudent = random(GA);
	studentName = select('#studentName');
	studentName.html(choosenStudent[0]);
	studentName.parent(studentPic);
	//studentName.mousePressed(addPhoto);
	addPhoto(studentName);
}

function addPStudent(){
	pStudents.push(choosenStudent);
	deleteStudent(choosenStudent);
	startLoop();
}

function addSStudent(){
	sStudents.push(choosenStudent);
	deleteStudent(choosenStudent);
	startLoop();
}


function addFStudent(){
	fStudents.push(choosenStudent);
	deleteStudent(choosenStudent);
	startLoop();
}

function startLoop(){
	flagStart = true;
	waitfive();
}

function waitfive(){
	setTimeout(()=>{
		flagStart = false;
	}, 5000);
}

function deleteStudent(student){
	for (let i = 0; i < GA.length; i++){
		if(student == GA[i]){
			GA.splice(i,1);
		}
	}
}

function addPhoto(par){
	img = createImg(choosenStudent[1]);
	img.size(200,200);
	img.parent(par);
}

function draw(){
	if(flagStart){
		choosenStudent = random(GA);
		studentName = select('#studentName');
		studentName.html(choosenStudent[0]);
		studentImage.src = choosenStudent[1];
		document.getElementById('studentPic').appendChild(studentImage);
	}
	
}
