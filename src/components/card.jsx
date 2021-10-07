import { React, useState, useEffect } from 'react'
import { useHistory } from 'react-router'

const Card = () => {
  const [data, setData] = useState()
  const history = useHistory()

  useEffect(() => {
    const dataForm = localStorage.getItem('studentCard')
    setData(JSON.parse(dataForm))
  }, [])

  const handleAdd = () => {
    history.push('/create')
  }

  const handleDelete = () => {
    delete localStorage.studentCard
    history.go(0)
  }

  const handleEdit = () => {
    history.push('/create')
  }

  return (
    <div className="container mt-5">
      {data ? (
        <>
          <h2>Карточка студента</h2>
          <p className="mb-0">
            <span className="fw-bold">Имя:</span> {data.name}
          </p>
          <p className="mb-0">
            <span className="fw-bold">Фамилия:</span> {data.lastName}
          </p>
          <p className="mb-0">
            <span className="fw-bold">Год рождения:</span> {data.year}
          </p>
          <p>
            <span className="fw-bold">Портфолио:</span>{' '}
            <a href={data.portfolio}>{data.portfolio}</a>
          </p>
          <button className="btn btn-primary me-4" onClick={handleEdit}>
            Редактировать
          </button>
          <button className="btn btn-danger" onClick={handleDelete}>
            Удалить
          </button>
        </>
      ) : (
        <>
          <h2>Карточка студента</h2>
          <p>Нет данных</p>
          <button className="btn btn-primary" onClick={handleAdd}>
            Добавить
          </button>
        </>
      )}
    </div>
  )
}

export default Card
