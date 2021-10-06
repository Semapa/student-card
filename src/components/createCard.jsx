import { React, useState, useEffect } from 'react'
import TextField from './textField'
import { validator } from '../utils/validator'

const CreateCard = () => {
  const [data, setData] = useState({
    name: '',
    lastName: '',
    year: '',
    portfolio: ''
  })
  const [errors, setErrors] = useState({})

  const validatorConfig = {
    name: {
      isRequired: {
        message: 'Поле "Имя" обязательно для заполнения'
      }
    },
    lastName: {
      isRequired: {
        message: 'Поле "Фамилия" обязательно для заполнения'
      }
    },
    year: {
      isRequired: {
        message: 'Поле "Год рождения" обязателено для заполнения'
      },
      length: {
        message: 'Поле "Год рождения" не корректно',
        value: 4
      }
    },
    portfolio: {
      isRequired: {
        message: 'Поле "Портфолио" обязательно для заполнения'
      }
    }
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const isValid = Object.keys(errors).length === 0

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center ">
        <div className="col-md-6 ">
          <h1>Создать</h1>
          <TextField
            label="Имя"
            name="name"
            value={data.name}
            error={errors.name}
            onChange={handleChange}
          ></TextField>
          <TextField
            label="Фамилия"
            name="lastName"
            value={data.lastName}
            error={errors.lastName}
            onChange={handleChange}
          ></TextField>
          <TextField
            type="number"
            label="Год рождения"
            name="year"
            value={data.year}
            error={errors.year}
            onChange={handleChange}
          ></TextField>
          <TextField
            label="Портфолио"
            name="portfolio"
            value={data.portfolio}
            error={errors.portfolio}
            onChange={handleChange}
          ></TextField>
          <button type="submit" className="btn btn-primary" disabled={!isValid}>
            Создать
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateCard
