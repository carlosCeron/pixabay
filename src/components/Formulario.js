import React from 'react';

const Formulario = () => {
    return (
        <div className="row">
            <div className="form-group col-md-8">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Busca una Imagen, ejemplo: Futbol o Cafe "
                />
            </div>
            <div className="form-group col-md-4">
                <input
                    type="submit"
                    className="btn btn-lg btn-danger btn-block"
                    value="Buscar"
                />
            </div>

        </div>
    );
};

export default Formulario;
