function Utils(errorOutputId) { // eslint-disable-line no-unused-vars
    let self = this;
    this.errorOutput = document.getElementById(errorOutputId);

    const OPENCV_URL = 'opencv.js';


    this.loadImageToCanvas = function(url, cavansId) {
        let canvas = document.getElementById(cavansId);
        let ctx = canvas.getContext('2d');
        let img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
        };
        img.src = url;
    };

    this.executeCode = function() {
        try {
            this.clearError();
            const gameCanvas = document.getElementById('container').contentWindow.document.getElementById('canvas')
            let context = gameCanvas.getContext("2d");
            let theCanvas2 = document.getElementById("templateCanvasInput");
            let context2 = theCanvas2.getContext("2d");


            context2.drawImage(gameCanvas, 0, 0);

            let src = cv.imread('imageCanvasInput');
            let templ = cv.imread('templateCanvasInput');
            console.log(templ)
            let dst = new cv.Mat();
            let mask = new cv.Mat();
            cv.matchTemplate(src, templ, dst, cv.TM_CCOEFF, mask);
            let result = cv.minMaxLoc(dst, mask);
            let maxPoint = result.maxLoc;
            let color = new cv.Scalar(255, 0, 0, 255);
            let point = new cv.Point(maxPoint.x + templ.cols, maxPoint.y + templ.rows);
            cv.rectangle(src, maxPoint, point, color, 2, cv.LINE_8, 0);
            cv.imshow('canvasOutput', src);
            src.delete();
            dst.delete();
            mask.delete();
        } catch (err) {
            this.printError(err);
        }
    };

    this.clearError = function() {
        this.errorOutput.innerHTML = '';
    };

    this.printError = function(err) {
        if (typeof err === 'undefined') {
            err = '';
        } else if (typeof err === 'number') {
            if (!isNaN(err)) {
                if (typeof cv !== 'undefined') {
                    err = 'Exception: ' + cv.exceptionFromPtr(err).msg;
                }
            }
        } else if (typeof err === 'string') {
            let ptr = Number(err.split(' ')[0]);
            if (!isNaN(ptr)) {
                if (typeof cv !== 'undefined') {
                    err = 'Exception: ' + cv.exceptionFromPtr(ptr).msg;
                }
            }
        } else if (err instanceof Error) {
            err = err.stack.replace(/\n/g, '<br>');
        }
        this.errorOutput.innerHTML = err;
    };

    this.addFileInputHandler = function(fileInputId, canvasId) {
        let inputElement = document.getElementById(fileInputId);
        inputElement.addEventListener('change', (e) => {
            let files = e.target.files;
            if (files.length > 0) {
                let imgUrl = URL.createObjectURL(files[0]);
                self.loadImageToCanvas(imgUrl, canvasId);
            }
        }, false);
    };

};
