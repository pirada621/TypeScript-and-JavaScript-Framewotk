//การเขียนคำอธิบายในโปรแกรมภาษา JavaScript ใช้เครื่องหมาย // หรือ /* */
/* 
    คำอธิบายแล้ว
    คำอธิบายเล่า
    คำอธิบายต่อ
    ทำแล้วทำอยู่ ทำต่อ
*/

console.log('Hello World')
console.log('สวัสดีชาวโลก')

// ปัญหาของ JavaScript
// ที่เกิดจากการเปลี่ยนประเภทของตัวแปร

let j: number = 10 // การสร้างตัวแปรแบบ let
// j = "JavaScript" 
// ไม่สามารถเปลี่ยนประเภทของตัวแปรได้ 

let k: number = Math.pow(j, 2) // NaN
console.log(j)
console.log(k) // NaN