import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Access = () => {
  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState('');

  const onFormSend = (evt) => {
    evt.preventDefault();

    if (!userMail || !userPass) {
      setFeedback('Todos los campos son obligatorios');
      setFeedbackType('error');
      return;
    }

    if (userPass.length < 6) {
      setFeedback('La contraseña debe tener al menos 6 caracteres');
      setFeedbackType('error');
      return;
    }

    setFeedback('¡Inicio de sesión exitoso!');
    setFeedbackType('success');
    setUserMail('');
    setUserPass('');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="acceso">
            <div className="card-header">
              <h3 className="text-center">Iniciar Sesión</h3>
            </div>
            <div className="card-body">
              <form onSubmit={onFormSend}>
                <div className="mb-3">
                  <label htmlFor="usermail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="usermail"
                    value={userMail}
                    onChange={e => setUserMail(e.target.value)}
                    placeholder="Ingresa tu email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userpass" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="userpass"
                    value={userPass}
                    onChange={e => setUserPass(e.target.value)}
                    placeholder="Ingresa tu contraseña"
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Iniciar Sesión
                  </button>
                </div>
              </form>
              {feedback && (
                <div className={`alert mt-3 ${feedbackType === 'success' ? 'alert-success' : 'alert-danger'}`}>
                  {feedback}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;