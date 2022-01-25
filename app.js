const numero = parseInt(prompt("Ingrese un número entre 1 a 20"));

if (numero < 20 && numero > 0) {

    const comprobarNumero = (num) => {

        for (let i = 1; i < num; i++) {

            console.log(`${num} x ${i} = ${num * 1}`);
        }
        for (let i = 1; i < num; i++) {
            console.log(`${'factorial de'} ${num} x ${i} = ${num * i}`);
        }
    };

    comprobarNumero(numero);
} else {
    console.log('fuera de rango')
}