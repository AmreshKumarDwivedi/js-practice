
const newname = '  amresh   '
const dalveer = '  dalver '
String.prototype.getLength=function(){
    console.log(this.trim())
}
newname.getLength();
dalveer.getLength();

//inheritance

const teacher = {
    sub:'physics'
}
const student = {
    classroom:'six'
}
Object.setPrototypeOf(student,teacher);
console.log(student)
console.log(student.sub); 