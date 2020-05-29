/*Register serviceworker*/
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('Service worker registered', reg))
        .catch((err) => console.log('Service worker not registered', err))
};

/*Get webcamera*/
async function getCamera() {
    try {
        let stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: "user" } });
        const cameraElem = document.querySelector('#video');
        cameraElem.srcObject = stream;
        cameraElem.addEventListener('loadedmetadata', () => {
            cameraElem.play();
        })
        console.log(stream);
    } catch (error) {
        console.log(error);
    }
};

getCamera();

/*Capture image*/
const canvas = document.getElementById('capturedPhoto');
const context = canvas.getContext('2d');
const cameraElem = document.querySelector('#video');

document.getElementById('captureBtnMobile').addEventListener('click', function() {
    context.drawImage(cameraElem, 0, 0, 300, 150);
});

document.getElementById('captureBtnTablet').addEventListener('click', function() {
    context.drawImage(cameraElem, 0, 0, 300, 150);
});

document.getElementById('captureBtnLaptop').addEventListener('click', function() {
    context.drawImage(cameraElem, 0, 0, 300, 150);
});

/*Adding filters*/
let oldVal = 0;

function brightnessChange(val) {
    Caman('#capturedPhoto', function() {
        if (val == 0) {
            this.revert();
        }

        console.log(val);

        this.brightness(val - oldVal);

        oldVal = val;
        this.render();
    });
};

function contrastChange(val) {
    Caman('#capturedPhoto', function() {
        if (val == 0) {
            this.revert();
        }

        console.log(val);

        this.contrast(val - oldVal);

        oldVal = val;
        this.render();
    });
};

function sepiaChange(val) {
    Caman('#capturedPhoto', function() {
        if (val == 0) {
            this.revert();
        }

        console.log(val);

        this.sepia(val - oldVal);

        oldVal = val;
        this.render();
    });
};

function saturationChange(val) {
    Caman('#capturedPhoto', function() {
        if (val == 0) {
            this.revert();
        }

        console.log(val);

        this.saturation(val - oldVal);

        oldVal = val;
        this.render();
    });
};

function sharpenChange(val) {
    Caman('#capturedPhoto', function() {
        if (val == 0) {
            this.revert();
        }

        console.log(val);

        this.sharpen(val - oldVal);

        oldVal = val;
        this.render();
    });
};

function exposureChange(val) {
    Caman('#capturedPhoto', function() {
        if (val == 0) {
            this.revert();
        }

        console.log(val);

        this.exposure(val - oldVal);

        oldVal = val;
        this.render();
    });
};

const removeBtn = document.getElementById('removeBtn');

removeBtn.addEventListener('click', (e) => {
    Caman('#capturedPhoto', function() {
        document.getElementById('brightness').value = 0;
        document.getElementById('contrast').value = 0;
        document.getElementById('sepia').value = 0;
        document.getElementById('saturation').value = 0;
        document.getElementById('sharpen').value = 0;
        document.getElementById('exposure').value = 0;
        this.revert();
    });
});