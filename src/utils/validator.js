export function validator(data, config) {
  const errors = {}

  function validate(validateMethod, data, config) {
    let statusValidate
    switch (validateMethod) {
      case 'isRequired':
        statusValidate = data.trim() === ''
        break
      case 'length': {
        const currentDate = new Date().getFullYear()
        statusValidate = data.length !== config.value
        if (!statusValidate)
          statusValidate = Number(data) > currentDate || Number(data) < 1950
        break
      }
      case 'isUrl': {
        const urlRegExp =
          /* eslint-disable-next-line */
          /(http)(s?):\/\/(www\.)?[a-z0-9]+\.[a-z\.]+/g
        statusValidate = !urlRegExp.test(data)
        break
      }
      default:
        break
    }
    if (statusValidate) return config.message
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      )

      // Проверяем если есть ошибка и нет уже записанной ошибки
      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }
  return errors
}
