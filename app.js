const nextbtn = document.getElementsByClassName ("next")
let points = 0
let stopQ1= false
let qNum= ""

document.getElementById("nextbtn-1").addEventListener('click', event => {
    document.getElementById("q2").classList.add("active")
    document.getElementById("q1").classList.add("blocked")
    stopQ1 = false
})

document.getElementById("finshbtn").addEventListener('click', event => {
    document.getElementById("q3").classList.remove("active")
    document.getElementById("q3").classList.add("blocked")
    document.getElementById("points-cont").innerHTML=`user points cont are ${points}`
    document.getElementById("finsh").classList.add("active")
})

function getIdQ(btn) {
    console.log(btn.dataset.t)
    if (btn.dataset.t==="1110" && stopQ1===false) {
        document.getElementById(btn.id).classList.add("true")
        points = points+10
        stopQ1= true
        qNum = btn.dataset.qnum
        viewNextBtn(qNum)
        addNext(qNum)
    }if  (stopQ1===false) {
        document.getElementById(btn.id).classList.add("false")
        stopQ1 = true
        qNum = btn.dataset.qnum
        addNext(qNum)
        viewNextBtn(qNum)
    }
}
function addNext (num) {
    console.log(num)
    if (num>=2) {
        document.getElementById(`nextbtn-${num}`).addEventListener('click', event => {
            document.getElementById(`q${num}`).classList.remove("active")
           let tester = document.getElementById(`q${Number(num)+1}`)
            document.getElementById(`q${Number(num)+1}`).classList.remove("blocked")
            
            stopQ1 = false
        })
    }
    
}

function viewNextBtn (num) {
            document.getElementById (`nextbtn-${num}`).classList.add("active")
    }
    document.querySelectorAll('.btn-ans-3').forEach(item => {
        item.addEventListener('click', event => {
            document.getElementById (`finshbtn`).classList.add("active")
        })
    })
