
var stopwatch = {
    hh: 0,
    mm: 0,
    ss: 1,
    msec: 0,

    clickStart: function() {
        var btnStart = 0;
        btnStart = document.querySelector('button');

        this.btnReplaceOnStart(btnStart);
        this.btnClear();
    },

    btnClear: function () {
        var self = this;
        var btnClear = document.querySelectorAll('button');
        btnClear[1].addEventListener('click', () => self.clearTimer.call(this));
    },

    timer: function (btnStart) {
        var self = this;
        this.hh_mm_ss = document.querySelectorAll('p');
        this.milisec = setInterval(() => {
            if (this.msec < 999) {
                this.msec = +this.msec + 9;
                this.hh_mm_ss[1].innerHTML = this.msec;
            } else if (this.ss <= 60) {
                this.msec = '0';
                this.addZero();
                this.hh_mm_ss[0].innerHTML = this.hh + ': ' + this.mm + ': ' + this.ss;
                this.ss++;
            } else if (this.mm < 60) {
                this.ss = 0;
                this.mm++;
                add_milisec();
            } else {
                this.ss = 0;
                this.mm = 0;
                this.hh++;
                add_milisec();
            };
        }, 9);
    },

    addZero: function () {
            if (0 <= this.ss && this.ss < 10) {
                this.ss = '0'+ +this.ss;
                this.mm = '0'+ +this.mm;
                this.hh = '0'+ +this.hh;
            } else if (0 <= this.mm && this.mm < 10) {
                this.mm = '0'+ +this.mm;
            } else if (0 <= this.hh && this.hh < 10) {
                this.hh = '0'+ +this.hh;
            };
        },

    stopTime: function (btnStart) {
        clearInterval(this.milisec);
    },

    clearTimer: function () {
        var btnStart = document.querySelector('button');
        var self = this;
        clearInterval(this.milisec);
        this.hh = 0;
        this.mm = 0;
        this.ss = 1;
        this.msec = 0;
        this.hh_mm_ss[0].innerHTML = '00' + ': ' + '00' + ': ' + '00';
        this.hh_mm_ss[1].innerHTML = '000';

        var container = btnStart.parentNode;

        btnStart.remove();

        btnStart = document.createElement('button');
        btnStart.classList.add('btn-success', 'btn_rep',  'btn');
        btnStart.innerHTML = 'Start';
        container.insertBefore(btnStart, container.firstChild);

        this.clickStart();
    },

    btnReplaceOnStart: function (btnStart) {
        var self = this;
            if (btnStart.classList.contains('btn-primary')) {
                btnStart.classList.remove('btn-primary');
                btnStart.classList.add('btn-success');
            };

            if (btnStart.innerHTML != 'Start') {
                btnStart.innerHTML = 'Start';
            };

            btnStart.addEventListener('click', startBtnReplaceOnPause);
            btnStart.addEventListener('click', startTimer);

            function startTimer() {
                self.timer(btnStart);
                btnStart.removeEventListener('click', startTimer);
            };

            function startBtnReplaceOnPause() {
                self.btnReplaceOnPause(btnStart);
                btnStart.removeEventListener('click', startBtnReplaceOnPause);
            };
    },

    btnReplaceOnPause: function (btnStart) {
        var self = this;
        btnStart.innerHTML = 'Pause';
            if (btnStart.classList.contains('btn-primary')) {
                btnStart.classList.remove('btn-primary');
                btnStart.classList.add('btn-success');
            };
        btnStart.addEventListener('click', startBtnReplaceOnContinue);
        btnStart.addEventListener('click', startStopTime);

            function startBtnReplaceOnContinue() {
                self.btnReplaceOnContinue(btnStart);
                btnStart.removeEventListener('click', startBtnReplaceOnContinue);
            };

            function startStopTime() {
                self.stopTime(btnStart);
                btnStart.removeEventListener('click', startStopTime);
            };
    },

    btnReplaceOnContinue: function (btnStart) {
        var self = this;
        btnStart.classList.remove('btn-success');
        btnStart.classList.add('btn-primary');
        btnStart.innerHTML = 'Continue';
        btnStart.addEventListener('click', startBtnReplaceOnPause);
        btnStart.addEventListener('click', startTimerContinue);

            function startBtnReplaceOnPause() {
                self.btnReplaceOnPause(btnStart);
                btnStart.removeEventListener('click', startBtnReplaceOnPause);
            };

            function startTimerContinue() {
                self.timer();
                btnStart.removeEventListener('click', startTimerContinue);
            };
    }
};

stopwatch.clickStart();
