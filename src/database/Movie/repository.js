const movieModel = require("./model")

class MovieRepository{
    constructor(){
        this.model = movieModel;
    }

    async addMultiple(query, options = {}){
        console.log("MovieRepository:::::addMultiple");
        return this.model.insertMany(query, options)
    }

    async create(query){
        console.log("MovieRepository:::::create");
        return this.model.create(query);
    }

    async getAll(query,sortObj,page,pageSize){
        console.log("MovieRepository:::::getAll");
        return this.model.find(query).sort(sortObj)
       .skip(pageSize * page)
       .limit(parseInt(pageSize));
    }

    async getCount(){
        return this.model.countDocuments({});
    }

    async update(query){
        const { id, ...rest} = query;
        console.log("MovieRepository:::::getAll",id);
        return this.model.updateOne({_id:id}, {$set: rest});
    }

    async delete(query){
        const { id } = query;
        console.log("MovieRepository:::::getAll",id);
        return this.model.deleteOne({_id:id});
    }
}

module.exports = new MovieRepository();
