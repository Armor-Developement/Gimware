function crashGame() {
    try {
        let largeArray = [];
        for (let i = 0; i < 1e7; i++) {
            largeArray.push(i);
        }

        let sum = 0;
        for (let i = 0; i < 1e6; i++) {
            sum += Math.sqrt(i);
        }

        function recursiveCrash(x) {
            if (x > 0) {
                recursiveCrash(x - 1);
            }
        }
        recursiveCrash(10000);

        let uselessString = '';
        for (let i = 0; i < 1e6; i++) {
            uselessString += 'a';
        }

        let dummyArray = [];
        for (let i = 0; i < 1e5; i++) {
            dummyArray.push(Math.random());
        }

        let anotherArray = [];
        for (let i = 0; i < 1e5; i++) {
            anotherArray.push(i * Math.sin(i));
        }

        let uselessObject = {};
        for (let i = 0; i < 1e4; i++) {
            uselessObject['key' + i] = Math.random();
        }

        let pointlessValue = 0;
        for (let i = 0; i < 1e5; i++) {
            pointlessValue += Math.log(i + 1);
        }

        location.reload();
    } catch (e) {
        console.error('Error occurred:', e);
    }
}

crashGame();
