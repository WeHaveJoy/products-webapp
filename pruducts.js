module.exports = function Products(pool) {

    async function insertDetails(details) {
        var insert = await pool.query('insert into customer(Firstname, Lastname, Age, Location) values($1, $2, $3, $4)', [details, 1]);
        return insert.row;
    }

    async function getDetails(){
    return await pool.query('select * from products');
    }

    async function info(SelectedServ){
        var names = await insertDetails(details)
        if (names.rowname === undefined) {
            await getDetails(names);   
        }
        await insertDetails(names);

        if (SelectedServ === "Interior") {
            return "Interior";
        } 
        else if(SelectedServ === "Exterior"){
            return "Exterior";
        }
        else if (SelectedServ === "Both"){
            return "Both";
        }

    }
    

return{
    insertDetails,
    getDetails,
    info 
}

}