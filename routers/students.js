const students = {
    totalElements: 2,
    students: [{
        name: 'Aluno 1',
        age: 16,
        id: 1
    }, {
        name: 'Aluno 2',
        age: 18,
        id: 2
    }]
};

module.exports = app => {
    app.get('/students', (req, res) => {
        res.json(students);
    });

    app.get('/students/:id', (req, res) => {
        const { id } = req.params;
        const response  = students.students.filter(item => {
             return item.id == id; 
        });

        if (response.length > 0) {
            res.json({
                student: response[0]
            });
        } else {
            res.status(404).json({
                message: 'Student Not Found !!!'
            });
        }
    });

    app.post('/students', (req, res) => {

        const newId = students.totalElements + 1;
        const { name, age } = req.body;

        students.students.push({
            name,
            age,
            id: newId
        });

        students.totalElements = newId;

        res.json({
            message: 'Register successfully'
        });
    });
}

