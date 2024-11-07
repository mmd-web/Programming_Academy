import { supabase } from "../API/supabase";

export default async function GetStorage( state ){
  const { data } = await supabase
    .storage
    .from('files')
    .list('')
    state.setState({
      storageFiles: data
    })
  return data;
}

export let saveRequired ;

export function RequiredData ( data , type ){
  saveRequired = data.map(item => item).filter(img => {
    return img.name.startsWith(type)
  })
  return saveRequired;
}