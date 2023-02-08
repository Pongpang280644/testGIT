
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";//ตั้งค่า
import{getFirestore , collection , getDocs} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"//เอาไฟล์firestoreเข้ามาทำงานร่วม
const firebaseConfig = {
  apiKey: "AIzaSyAaaud0vyOfuTYX_0XGNBh3OnQ5_iPVKgQ",
  authDomain: "basic-firebase-4a605.firebaseapp.com",
  projectId: "basic-firebase-4a605",
  storageBucket: "basic-firebase-4a605.appspot.com",
  messagingSenderId: "512405719940",
  appId: "1:512405719940:web:d2fb04ed4decda47e1ebd1",
  measurementId: "G-9N7P1LYW3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app) //dbเป็นตัวแทนฐานข้อมูล
const table = document.getElementById("table")//เพื่อเ)้นการเข้าถึงtable
const form = document.getElementById("addForm")

async function getFacility(db){
    const facCol = collection (db,'facility') //จะเข้าไปในfacility
    const facSnapshot = await getDocs(facCol)//เก็บกลุ่มของDocsโดยตอนดึงครบถึงจะไปทำงานอย่างอื่นได้
    return facSnapshot
}
function showData(facility){
    const row = table.insertRow(-1)
    const nameCol = row.insertCell(0)
    const picturteCol = row.insertCell(1)
    const mapCol = row.insertCell(2)
    nameCol.innerHTML = facility.data().name//ไปดึงdataมาจากfacility
    picturteCol.innerHTML = facility.data().picture
    mapCol.innerHTML = facility.data().map
    
}

//ดึงกลุ่ม document
const data = await getFacility(db)
data.forEach(facility=>{
    showData(facility)
})

//ดึงข้อมูลจากแบบฟอร์ม
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(form.name.value)
    //console.log(form.map.value)
    //console.log(form.map.value)
})