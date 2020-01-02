const utils = {} 

utils.getColumnFromMatrix = (matrix, index) => {
  
  const column = []
  for(var i = 0; i < matrix.length; i++) {
    column.push(matrix[i][index])
  }

  return column
}

utils.getRowsFromMatrix = (matrix, index, value) => {

  const rows = []
  for(var i = 0; i < matrix.length; i++) {
    if(matrix[i][index] === value) {
      rows.push(matrix[i])
    }
  }

  return rows
}

utils.dataArrayRef = {
  'pd_index': 0,
  'country': 1,
  'date': 2,  
  'acousticness': 3, 
  'danceability': 4, 
  'energy': 5, 
  'instrumentalness': 6, 
  'liveness': 7,  
  'loudness': 8, 
  'speechiness': 9,
  'tempo': 10, 
  'valence': 11
}

utils.dateToYMD = (date) => {
  var d = date.getDate();
  var m = date.getMonth() + 1; //Month from 0 to 11
  var y = date.getFullYear();
  return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}

utils.makeid = (length) => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

module.exports = utils 