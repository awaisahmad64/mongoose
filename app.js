const mongoose = require('mongoose');
const Student = require('./Student');
require('dotenv').config();
mongoose.set('strictQuery', false);
const DB = process.env.DATABASE;
mongoose.connect(
  DB,
  () => {
    console.log('conneted');
  },
  (e) => console.error(e)
);
// const student = new Student({
//   first_name: 'Ahmad',
//   last_name: 'shahil',
//   gender: 'Male',
// });
// student.save().then(()=>{
//     console.log("studnet Save!")
// }) instead of this
run();
async function run() {
  const student = await Student.create({
    first_name: 'Ahmad',
    last_name: 'shahil',
    gender: 'Male',
  });
  //   const student = new Student({
  //     first_name: 'Ahmad',
  //     last_name: 'shahil',
  //     gender: 'Male',
  //   });
  //   await student.save();
  console.log(student);
}
