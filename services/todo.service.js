class TodoService {
    
    async find() {
        return [];
    }

    async findOne(id) {
        return { id };
    }

    async create(data) {
        return { data };
    }

    async update(updatedData) {
        return { updatedData };
    }

    async delete(id) {
        return { 
            id,
            deleted: true 
        };
    }
}

module.exports = TodoService;
