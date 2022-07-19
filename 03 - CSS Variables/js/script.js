const inputs = document.querySelectorAll('.controls input'); // .controls class'inin icinde ki butun input larin 'inputs' degiskeni oldugunu belirttik.

function handleUpdate(){
    const suffix = this.dataset.sizing || ''; // dataset; nesnenin 'data-...' ile baslayan degerleridir. data-sizing(px) degiskeni ya da hic bir sey.
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // ({input.name}, input.value + px || '');
}

inputs.forEach(input => input.addEventListener('change', handleUpdate)); // input da gerceklesen her bir degisimde handleupdate fonksiyonunu calistir.
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); // input da gerceklesen her bir fare harekitinde handleupdate fonksiyonunu calistir.