import React from 'react'
import TextField from './textField'

const CreateCard = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center ">
        <div className="col-md-6 ">
          <h1>Создать</h1>
          <TextField label="Имя"></TextField>
          <TextField label="Фамилия"></TextField>
          <TextField label="Год рождения"></TextField>
          <TextField label="Портфолио"></TextField>
          <button type="submit" className="btn btn-primary">
            Создать
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateCard
