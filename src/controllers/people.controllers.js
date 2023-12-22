import Person from '../models/person.model.js'

export const getPeople = async (req, res) => {
    try {
        const person = await Person.find()
        res.json(person)
    } catch (error) {
        console.log(error)
    }
}

export const savePerson = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newPerson = new Person({ name, email, message });
        const savedPerson = await newPerson.save();

        res.status(200).json({ status: 'success', message: 'mensaje enviado con éxito ✔', data: savedPerson });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Error al enviar el mensaje ❌' });
    }
};