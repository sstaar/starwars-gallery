//All the data from the api contains Ids on the form of links
//This is for getting the exact Id instead of the entire Link
export const getDataId = (data) => {
    return data.split('/')[5]
}