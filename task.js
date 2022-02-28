var words = ['Ночь', 'Улица', 'Фонарь', 'Аптека', 'Бессмысленный', 'Тусклый', 'Свет'];

getLastElementOfArray(words);

console.log(getLastElementOfArray(words));

function getLastElementOfArray(array) {
  let last = array[words.length - 1]; 
  return last
}
