const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for(let property in alien) {
    console.log(property);
    console.log(alien[property]);
}