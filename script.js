function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence.slice(0, n);
}

document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const exitBtn = document.getElementById('exitBtn');
    const numElementsInput = document.getElementById('numElements');
    const resultList = document.getElementById('resultList');
    const formContainer = document.getElementById('formContainer');
    const resultContainer = document.getElementById('resultContainer');

    calculateBtn.addEventListener('click', () => {
        const numElements = parseInt(numElementsInput.value, 10);
        if (isNaN(numElements) || numElements <= 0) {
            alert('Por favor, introduzca un número válido mayor que 0.');
            return;
        }

        // Ocultar el formulario si numElements > 100
        if (numElements > 100) {
            formContainer.classList.add('hidden');
            resultContainer.style.marginTop = '0'; // Ajusta el espacio superior
        } else {
            formContainer.classList.remove('hidden');
            resultContainer.style.marginTop = '20px'; // Ajusta el espacio superior
        }

        // Calcula y muestra la serie de Fibonacci
        const fibonacciSequence = fibonacci(numElements);
        resultList.innerHTML = '';
        fibonacciSequence.forEach(num => {
            const li = document.createElement('li');
            li.textContent = num;
            resultList.appendChild(li);
        });
    });

    clearBtn.addEventListener('click', () => {
        numElementsInput.value = '';
        resultList.innerHTML = '';
        formContainer.classList.remove('hidden');
        resultContainer.style.marginTop = '20px'; // Restablece el espacio superior
    });

    exitBtn.addEventListener('click', () => {
        window.close(); // Cierra la ventana del navegador si se permite.
    });
});
