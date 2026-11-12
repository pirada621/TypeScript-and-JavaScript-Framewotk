//การเขียนคำอธิบายในโปรแกรมภาษา JavaScript ใช้เครื่องหมาย // หรือ /* */
/* 
    คำอธิบายแล้ว
    คำอธิบายเล่า
    คำอธิบายต่อ
    ทำแล้วทำอยู่ ทำต่อ
*/

console.log('Hello World')

// ปัญหาของ JavaScript ที่เกิดจากการเปลี่ยนประเภทตัวแปร
let x = 10 // การสร้างตัวแปรด้วย let
x = "JavaScript"
let y = Math.pow(x, 2) // NaN
console.log(x)
console.log(y) // NaN

// อีกสักตัวอย่าง
let a = "10"
let z = a + 10 // 1010
console.log(z)