function converteTemperatura(celcius) {
    const fahrenheit = (celcius * 1.8) + 32;
    return `A temperatura em ${celcius} é de: ${fahrenheit}`;
}

console.log(converteTemperatura(32));   