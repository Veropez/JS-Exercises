const placesToTravel = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
]

//array de objetos

for (let i=0; i < placesToTravel.length; i++) {
    console.log(i);
    let place = placesToTravel[i];
    console.log(place.name);
    if(place.id === 11 || place.id === 40){
       placesToTravel.splice(i, 1);
       i--;
    }
}