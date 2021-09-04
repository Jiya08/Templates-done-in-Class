var student;

function setup() {
  createCanvas(400,400);
student = new Student("Joseph",11,"A");
}

function draw() 
{
  background(30);
  student.show();
}