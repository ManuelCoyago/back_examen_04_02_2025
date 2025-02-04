export class Controlador {
    constructor(modelo) {
        this.modelo = modelo;
    }

    getAll = async (req, res) => {
        try {
            const modelo = await this.modelo.getAll();
            res.json(modelo);
        } catch (error) {
            res.status(500).json({ error: "Can't list the data now..." });
        }
    };
    getById = async (req, res) => {
        const id = req.params.id; 
        try {
            const modelo = await this.modelo.getById(id);
            if (modelo) {
                res.json(modelo);
            } else {
                res.status(404).json({ error: "Not Found" });
            }
        } catch (error) {
            res.status(500).json({ error: "Can't list the data now..." });
        }
    };

    delete = async (req, res) => {
        const id = req.params.id;
        try {
            const resultado = await this.modelo.delete(id);
            if (resultado.deletedCount > 0) {
                res.json({ message: "Deleted" });
            } else {
                res.status(404).json({ error: "Cannot find the data" });
            }
        } catch (error) {
            res.status(500).json({ error: "Cannot delete the data" });
        }
    };

    create = async (req, res) => {
        const modelo = req.body;
        try {
            const nuevoModelo = await this.modelo.create(modelo);
            res.status(201).json(nuevoModelo);
        } catch (error) {
            console.error("Cannot create the information", error);
            res.status(500).json({ error: "Cannot create the information" });
        }
    };

    update = async (req, res) => {
        const id = req.params.id; 
        const modelo = req.body;

        if (modelo.error) {
            return res.status(400).json({ error: "Cannot validate the data" });
        }

        try {
            const modeloActualizado = await this.modelo.update(id,modelo);
            if (modeloActualizado) {
                res.json(modeloActualizado);
            } else {
                res.status(404).json({ error: "Not Found" });
            }
        } catch (error) {
            res.status(500).json({ error: "Can't update the data" });
        }
    };
}