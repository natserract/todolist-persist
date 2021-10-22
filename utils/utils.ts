export const removeSpaceToLower = (str: string) => {
  return str.replace(/\s/g, '-').toLowerCase();
}

export const toCamelCase = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return word.toUpperCase();
  }).replace(/\s+/g, ' ');
}

export const normalizeStr = (str: string) => {
  let newStr = str.replace('-', ' ')
  return toCamelCase(newStr);
}

export const generateRandomNum = () => {
  return Math.floor( Math.random() * ( 1 + 200 - 1 ) )
}

export const mappingStatus = (status: string) => {
  switch (status) {
    case '1': {
      return 'open'
    }
    case '2': {
      return 'overdue'
    }
    case '3': {
      return 'done'
    }
    default: {
      return 'status not found'
    }
  }
}

export const mappingColorStatus = (status: string) => {
  switch (status) {
    case '1': {
      return '#C4C4C4'
    }
    case '2': {
      return '#C4C4C4'
    }
    case '3': {
      return '#5440D1'
    }
    default: {
      return 'transparent'
    }
  }
}