import { React, useState, useEffect } from 'react'

const Card = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const dataForm = localStorage.getItem('studentCard')
    console.log('dataForm', dataForm)
    setData(JSON.parse(dataForm))
    console.log(data)
    return () => {
      delete localStorage.studentCard
    }
  }, [])

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
          <button className="btn btn-primary">Редактировать</button>
        </>
      ) : (
        <>
          <h2>Карточка студента</h2>
          <p>Нет данных</p>
          <button className="btn btn-primary ">Добавить</button>
        </>
      )}
    </div>
  )
}

export default Card
