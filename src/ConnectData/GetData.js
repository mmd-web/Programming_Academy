export let saveRequired ;

export function RequiredData ( data , type ){
  saveRequired = data.map(item => item).filter(img => {
    return img.name.startsWith(type)
  })
  return saveRequired;
}