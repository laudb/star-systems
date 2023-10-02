const supabase = require('./db');

// fetch data
async function fetchAllQuery(){
    try {
        let { data, error } = await supabase.from('systems').select('*')
        return data        
    }
    catch (err){
        console.log({
            "err":err
        }); 
        return 
    }
}

// insert data
async function insertQuery(db_query){
    const { error } = await supabase
        .from('stars')
        .insert(db_query)
        .select()
}


module.exports = {
    fetchAllQuery,
    insertQuery
}
