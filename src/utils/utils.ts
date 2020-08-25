export function toType(obj: any) {
  let type = getType(obj);
  // some extra disambiguation for numbers
  if (type === 'number') {
    if (isNaN(obj)) {
      type = 'nan';
    } else if ((obj | 0) !== obj) {
      //bitwise OR produces integers
      type = 'float';
    } else {
      type = 'integer';
    }
  }
  return type;
}

function getType(obj: any) {
  // @ts-ignore
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}
