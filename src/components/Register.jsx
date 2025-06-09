import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  const [regMail, setRegMail] = useState('');
  const [regPass, setRegPass] = useState('');
  const [regPassAgain, setRegPassAgain] = useState('');
  const [alertMsg, setAlertMsg] = useState('');
  const [alertKind, setAlertKind] = useState('');

  const processRegister = (event) => {
    event.preventDefault();

    if (!regMail || !regPass || !regPassAgain) {
      setAlertMsg('Todos los campos son obligatorios');
      setAlertKind('error');
      return;
    }

    if (regPass.length < 6) {
      setAlertMsg('La contraseña debe tener al menos 6 caracteres');
      setAlertKind('error');
      return;
    }

    if (regPass !== regPassAgain) {
      setAlertMsg('Las contraseñas no coinciden');
      setAlertKind('error');
      return;
    }

    setAlertMsg('¡Registro exitoso!');
    setAlertKind('success');
    setRegMail('');
    setRegPass('');
    setRegPassAgain('');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="registro">
            <div className="card-header">
              <h3 className="text-center">Registro</h3>
            </div>
            <div className="card-body">
              <form onSubmit={processRegister}>
                <div className="mb-3">
                  <label htmlFor="regmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="regmail"
                    value={regMail}
                    onChange={e => setRegMail(e.target.value)}
                    placeholder="Ingresa tu email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="regpass" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="regpass"
                    value={regPass}
                    onChange={e => setRegPass(e.target.value)}
                    placeholder="Ingresa tu contraseña"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="regpassagain" className="form-label">
                    Confirmar Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="regpassagain"
                    value={regPassAgain}
                    onChange={e => setRegPassAgain(e.target.value)}
                    placeholder="Confirma tu contraseña"
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Registrarse
                  </button>
                </div>
              </form>
              {alertMsg && (
                <div className={`alert mt-3 ${alertKind === 'success' ? 'alert-success' : 'alert-danger'}`}>
                  {alertMsg}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;