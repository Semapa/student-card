export function validator(data, config) {
  const errors = {}

  function validate(validateMethod, data, config) {
    let statusValidate
    // console.group()
    // console.log('validateMethod', validateMethod)
    // console.log('data', data)
    // console.log('config', config)
    // console.groupEnd()
    switch (validateMethod) {
      case 'isRequired':
        statusValidate = data.trim() === ''
        break
      case 'length': {
        const currentDate = new Date().getFullYear()
        statusValidate = data.length !== config.value
        if (!statusValidate) statusValidate = Number(data) > currentDate
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
