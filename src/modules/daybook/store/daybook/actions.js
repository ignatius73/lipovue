import  daybookApi  from '@/api/daybook'

export const loadEntries = async ( {commit} )=>{
   const { data } = await daybookApi.get('/entries.json')
   const entries = []
   for( let id of Object.keys(data)){
       entries.push({
           id,
           ...data[id]
       })
   }
   commit('setEntries', entries )
}

export const UpdateEntry = async ( {commit},  entry) =>{
    const { id, ...dataToSave } = entry
    
    await daybookApi.put(`/entries/${ id }.json`,dataToSave)
    commit('updateEntry', { ...entry })
}

export const SaveEntry = async ( {commit}, entry ) =>{
  
  const { data } =  await daybookApi.post('/entries.json', entry)
  const dataToSave = {
      id: data.name,
      ...entry
  }
  commit('saveEntry', dataToSave) 
  return data.name
}