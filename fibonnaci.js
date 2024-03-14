function fibonacci(n) {
    let fib = [0, 1];

    for (let i = 2; i <= n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n]
}

const termos = 10;
for (let i = 0; i < termos; i++){
    console.log(fibonacci(i));
}