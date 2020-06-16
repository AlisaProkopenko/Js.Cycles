        console.log("Задание 1:");
        for (let a=0; a <=10; a++) {
            if (a%2==0) {
                 console.log(a);
                 }
        }

        console.log("Задание 2:");
        let i = 1;
        let sum = 0;
        while(sum<10){
            if(i%2==0){
                console.log(i);
                sum++;
            }
            i++;
        }

        console.log("Задание 3:");
        let m = "";
        do {
            m = prompt("Введите то, что нужно");
            }
                while(m!=".")
                    console.log("Вы угадали");

        console.log("Задание 4:")
        for(let k=0; k<=10; k++){
            if(k%2==0){
            console.log(k);
        }
    }
    
        console.log("Задание 5:")
        let x=1
        let n = prompt("Введите n:");
        do {
        console.log("*");
        x++;
        } while (x<=n)