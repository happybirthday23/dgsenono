const videoModal = document.getElementById('videoModal');
const closeIcon = document.getElementById('closeIcon');

function login() {

    document.getElementById('username').classList.remove('is-invalid');
    document.getElementById('password').classList.remove('is-invalid');

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username && password) {
        event.preventDefault();
        if (username == 'nausseil' && password == '1997') {
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
        function () {
            statusMessage.innerHTML = 'Demande d\'accès au proxy SSL...';
        }, 1500
    )

    setTimeout(
        function () {
            statusMessage.innerHTML = 'Chiffrement du tunnel SSH...';
        }, 2300
    )

    setTimeout(
        function () {
            statusMessage.innerHTML = 'Chargement des paramètres de session...';
        }, 3100
    )

    setTimeout(
        function () {
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
    if (window.location.hash == '#logged') {
        document.getElementById('mailIcon').setAttribute('src', '../pictures/newMail_icon.png');
        setTimeout(
            function () {
                videoModal.style.display = 'block';
            },
            1500
        );
    } else if (window.location.hash == '#validated') {
        document.getElementById('mailIcon').setAttribute('src', '../pictures/newMail_icon.png');
    }
}

let transmission = document.getElementById('transmission');
let transmissionVid = document.getElementById("transmissionVid");
let blink = setInterval(function () {
    if (transmission && transmission.style.opacity == 0) {
        transmission.style.opacity = 1;
    } else if (transmission && transmission.style.opacity == 1) {
        transmission.style.opacity = 0;
    }


}, 500)

function displayVid() {
    clearInterval(blink);
    document.getElementById('transmissionContainer').style.display = 'none';
    document.getElementById('transmissionModal').style.marginTop = '3%';
    transmissionVid.style.display = 'block';
    setTimeout(
        function () {
            transmissionVid.muted = !transmissionVid.muted;
        }, 1000
    )
}

if (transmissionVid) transmissionVid.onended = function () {
    videoModal.style.display = 'none';
}

function mailRedirect() {
    if (window.location.hash == '#validated') {
        window.location.href = 'mailbox.html#validated';
    } else {
        window.location.href = 'mailbox.html';
    }
}

function readCheck() {
    if (window.location.hash == '#validated') {
        document.getElementById('validationEmail').classList.remove('d-none');
        document.getElementById('unreadEmitter').classList.remove('font-weight-bold');
        document.getElementById('unreadTitle').classList.remove('font-weight-bold');
        document.getElementById('unreadBody').classList.add('mailContent');
        document.getElementById('unreadBody').innerHTML = 'Agent Ausseil, Je vous fais parvenir comme convenu l...';
    } else if (window.location.hash == '#allRead') {
        document.getElementById('validationEmail').classList.remove('d-none');
        document.getElementById('unreadEmitter').classList.remove('font-weight-bold');
        document.getElementById('unreadTitle').classList.remove('font-weight-bold');
        document.getElementById('unreadBody').classList.add('mailContent');
        document.getElementById('unreadBody').innerHTML = 'Agent Ausseil, Je vous fais parvenir comme convenu l...';
        document.getElementById('validEmitter').classList.remove('font-weight-bold');
        document.getElementById('validTitle').classList.remove('font-weight-bold');
        document.getElementById('validBody').classList.add('mailContent');
        document.getElementById('validBody').innerHTML = 'Confirmation des ordres de mission. Activation...'
    }
}

function hoverMap() {
    let mousePosX = event.clientX;
    let mousePosY = event.clientY;
    let svgMap = document.getElementById('svgMap');
    let coordinates;

    if (!document.getElementById('coordinates')) {
        coordinates = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        coordinates.setAttribute('id', 'coordinates');
        coordinates.setAttribute('x', '68');
        coordinates.setAttribute('y', '2');
        coordinates.setAttribute('font-size', '2.5');
        coordinates.setAttribute('fill', 'red');
        coordinates.setAttribute('stroke', 'red');
        coordinates.setAttribute('stroke-width', '0.03');
        svgMap.appendChild(coordinates);
    } else {
        coordinates = document.getElementById('coordinates');
    }

    coordinates.innerHTML = `Position : ${mousePosX + (mousePosX * 0.2)} ° - ${mousePosY + (mousePosY * 0.5)} °`;
}

function clearHover() {
    let coordinates = document.getElementById('coordinates');
    let svgMap = document.getElementById('svgMap');

    svgMap.removeChild(coordinates);
}

/* A retravailler
function clickMap() {
    let mousePosX = event.clientX;
    let mousePosY = event.clientY;
    let rect = event.target.getBoundingClientRect();

    let xPos = mousePosX - rect.left;
    let yPos = mousePosY - rect.top;

    let xPercent = mousePosX / window.innerWidth * 100;
    let xCorrect = 2010/ window.innerWidth * 100;
    let yPercent = mousePosY / window.innerHeight * 100;
    let yCorrect = 186 / window.innerHeight * 100;
    let svgMap = document.getElementById('svgMap');

    //let clickedSpot = document.createElement('circle', ['cx = 10', 'cy = 60', 'r = 10', 'stroke = red', 'stroke-width = 2px', 'fill = none']);
    let clickedSpot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    //clickedSpot.setAttribute('cx', (xPercent * 2.77) - xCorrect);
    clickedSpot.setAttribute('cx', xPos / 12.25);
    //clickedSpot.setAttribute('cy', (yPercent * 1.31) - yCorrect);
    clickedSpot.setAttribute('cy', yPos / 12.25);
    clickedSpot.setAttribute('r', '1');
    clickedSpot.setAttribute('stroke', 'red');
    clickedSpot.setAttribute('stroke-width', '0.5');
    clickedSpot.setAttribute('fill', 'none');


    svgMap.appendChild(clickedSpot);
    console.log('pos : ' + xPercent + ' - ' + yPercent);
    console.log('rectLeft : ' + rect.left + ' - rectTop : ' + rect.top);
}
*/

function clickedSpot(place) {

    let rdvPlace = document.getElementById('rdvPlace');
    let changeEvent = new Event('change');
    rdvPlace.value = place;
    rdvPlace.dispatchEvent(changeEvent);
}

function removeParentClick() {
    let svgMap = document.getElementById('svgMap');
    let coordinates = document.getElementById('coordinates');
    svgMap.removeAttribute('onclick');

    if (!document.getElementById('coordinates')) {
        coordinates = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        coordinates.setAttribute('id', 'coordinates');
        coordinates.setAttribute('x', '68');
        coordinates.setAttribute('y', '2');
        coordinates.setAttribute('font-size', '2.5');
        coordinates.setAttribute('fill', 'rgb(0, 255, 0)');
        coordinates.setAttribute('stroke', 'rgb(0, 255, 0)');
        coordinates.setAttribute('stroke-width', '0.03');
        svgMap.appendChild(coordinates);
    }
}

function resetParentClick() {
    let svgMap = document.getElementById('svgMap');
    svgMap.setAttribute('onclick', 'clickedSpot(\'Lieu non répertorié\')');
}

function completionCheck() {
    let rdvPlace = document.getElementById('rdvPlace');
    let rdvTime = document.getElementById('rdvTime');
    let activationButton = document.getElementById('activationButton');

    if (rdvPlace.value && rdvTime.value) {
        activationButton.removeAttribute('disabled');
        activationButton.classList.remove('btn-secondary');
        activationButton.classList.add('btn-primary');
    }
}

function activationCheck() {
    let rdvTime = document.getElementById('rdvTime').value;
    let rdvPlace = document.getElementById('rdvPlace').value;

    if (rdvTime == '17:30' && rdvPlace == 'Dream Café') {
        window.location.href = 'homePage.html#validated';
    } else if (rdvPlace == 'Dream Café') {
        let excuses = [
            'Est à la salle.',
            'Doit garder un chat.',
            'Doit refaire son pass NaviGo.',
            'Doit commencer à faire la queue devant le Pink Mamma.',
            'Est de petit déjeuner.'
        ];

        let randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];

        let excuseElement = document.getElementById('excuse');
        excuseElement.innerHTML = randomExcuse;

        openModal('wrongTimeModal');

    } else {
        openModal('wrongPlaceModal');
    }
}

/*function viewBoxAdjust() {
    let rdvMap = document.getElementById('rdvMap');
    let svgMap = document.getElementById('svgMap');

    svgMap.setAttribute('viewBox', `25 0 ${rdvMap.offsetWidth / 10} 100`);
    console.log('la width oui : ' + rdvMap.offsetWidth);

}*/