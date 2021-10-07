import { React, useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import TextField from './textField'
import { validator } from '../utils/validator'
import 'bootstrap/js/dist/modal'

const CreateCard = () => {
  const [data, setData] = useState({
    name: '',
    lastName: '',
    year: '',
    portfolio: ''
  })

  const [errors, setErrors] = useState({})
  const [isData, setIsData] = useState(false)
  const history = useHistory()

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
      },
      isUrl: {
        message: 'Поле "Портфолио" должно быть ссылкой'
      }
    }
  }

  useEffect(() => {
    const dataForm = localStorage.getItem('studentCard')
    if (dataForm) {
      setData(JSON.parse(dataForm))
      setIsData(true)
    } else {
      setData({
        name: '',
        lastName: '',
        year: '',
        portfolio: ''
      })
    }
  }, [])

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

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('studentCard', JSON.stringify(data))
  }

  const handleBack = () => {
    history.push('/')
  }

  const handleClose = () => {
    history.push('/')
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center ">
        <div className="col-md-6 ">
          <h1>Создать</h1>
          <form onSubmit={handleSubmit}>
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
              placeholder="1999"
              onChange={handleChange}
            ></TextField>
            <TextField
              label="Портфолио"
              name="portfolio"
              value={data.portfolio}
              error={errors.portfolio}
              placeholder="http://..."
              onChange={handleChange}
            ></TextField>
            {isData ? (
              <>
                <button
                  type="button"
                  className="btn btn-secondary me-4"
                  onClick={handleBack}
                >
                  Назад
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!isValid}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Обновить
                </button>
              </>
            ) : (
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!isValid}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Создать
              </button>
            )}
          </form>
          {/* --- */}
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">Обновлено</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ---- */}
        </div>
      </div>
    </div>
  )
}

export default CreateCard
