const mainElement = document.getElementById('main');
//remove main
mainElement.remove();
//create a newHeader variable. create an h1 = victory(id)
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Jemaul is the champion!';
document.body.append(newHeader);


