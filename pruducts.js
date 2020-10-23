module.exports = function Products(pool) {

    async function insertDetails(details) {
        var insert = await pool.query('insert into customer(Firstname, Lastname, Age) values($1, $2, $3)', [details, 1]);
        return insert.row;
    }

    async function getDetails(){
    return await pool.query('select * from products');
    }

    

return{
    insertDetails,
    getDetails 
}

}