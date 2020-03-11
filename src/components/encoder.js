
const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
}

const encoder = (formData) => {
fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'contact',...formData })
  })
    .then(() => {
      clearFormData(),
        (openModal = true),
        successMessage(),
        successAnimation.setSpeed(2)
    })
    .catch(error => {
      errorLog = error
      openModal = true
      errorMessage()
    })
}
export default encoder
