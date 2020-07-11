const videoModal = document.getElementById('videoModal');
const closeIcon = document.getElementById('closeIcon');

function login() {

    document.getElementById('username').classList.remove('is-invalid');
    document.getElementById('password').classList.remove('is-invalid');

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username && password) {
        event.preventDefault();
        if(username == 'nausseil' && password == '1997') {
            window.location.href = 'assets/pages/connect.html';
        } else {
            if (username != 'nausseil' && username != 'jausseil' && username != 'mausseil' && username != 'abastide' && username != 'vtodeschini' && username != 'mdemaison') {
                document.getElementById('username').classList.add('is-invalid');
            }
            document.getElementById('password').classList.add('is-invalid');         
        }
    }
}

function connectProtocol() {

    let statusMessage = document.getElementById('statusMessage');

    setTimeout(
        function() {
            statusMessage.innerHTML = 'Demande d\'accès au proxy SSL...';
        }, 1500
    )

    setTimeout(
        function() {
            statusMessage.innerHTML = 'Chiffrement du tunnel SSH...';
        }, 2300
    )

    setTimeout(
        function() {
            statusMessage.innerHTML = 'Chargement des paramètres de session...';
        }, 3100
    )

    setTimeout(
        function() {
            window.location.href = 'homePage.html#logged';
        }, 3500
    )
}

function openModal(item) {
    var modal = document.getElementById(item);
    modal.style.display = 'block';
}

function closeModal(item) {
    var modal = document.getElementById(item);
    modal.style.display = 'none';
}

function videoMessage() {
    if(window.location.hash == '#logged') {
        document.getElementById('mailIcon').setAttribute('src', '../pictures/newMail_icon.png');
        setTimeout(
            function() {
                videoModal.style.display = 'block';
            },
            1500
        );
    }
}

let transmission = document.getElementById('transmission');
let transmissionVid = document.getElementById("transmissionVid");
let blink = setInterval(function() {
    if (transmission && transmission.style.opacity == 0) {
        transmission.style.opacity = 1;
    } else if(transmission && transmission.style.opacity == 1) {
        transmission.style.opacity = 0;
    }
    
    
}, 500)

function displayVid() {
    clearInterval(blink);
    document.getElementById('transmissionContainer').style.display = 'none';
    document.getElementById('transmissionModal').style.marginTop = '3%';
    transmissionVid.style.display = 'block';
    setTimeout(
        function() {
            transmissionVid.muted = !transmissionVid.muted;
        }, 1000
    )
}

if(transmissionVid) transmissionVid.onended = function() {
    videoModal.style.display = 'none';
}

function clickMap() {
    let mousePosX = event.clientX;
    let mousePosY = event.clientY;
    let rect = event.target.getBoundingClientRect();

    let xPos = mousePosX - (rect.left * 2.56);
    let yPos = mousePosY - rect.top;

    let xPercent = mousePosX / window.innerWidth * 100;
    let xCorrect = 2010/ window.innerWidth * 100;
    let yPercent = mousePosY / window.innerHeight * 100;
    let yCorrect = 186 / window.innerHeight * 100;
    let svgMap = document.getElementById('svgMap');

    //let clickedSpot = document.createElement('circle', ['cx = 10', 'cy = 60', 'r = 10', 'stroke = red', 'stroke-width = 2px', 'fill = none']);
    let clickedSpot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    //clickedSpot.setAttribute('cx', (xPercent * 2.77) - xCorrect);
    clickedSpot.setAttribute('cx', xPos * 0.18);
    //clickedSpot.setAttribute('cy', (yPercent * 1.31) - yCorrect);
    clickedSpot.setAttribute('cy', yPos * 0.18);
    clickedSpot.setAttribute('r', '2');
    clickedSpot.setAttribute('stroke', 'red');
    clickedSpot.setAttribute('stroke-width', '1');
    clickedSpot.setAttribute('fill', 'none');


    svgMap.appendChild(clickedSpot);
    console.log('pos : ' + xPercent + ' - ' + yPercent);
}

function correctSpot() {
    console.log('NICEUH!!');
}

function activationCheck() {
    let meetingTime = document.getElementById('meetingTime').nodeValue;
    let activationButton = document.getElementById('activationButton');

    console.log('le meeting time : ' + meetingTime);

    if (meetingTime) {
        activationButton.removeAttribute('disabled');
        activationButton.classList.add('btn-primary');
        activationButton.classList.remove('btn-secondary');
    }
}
