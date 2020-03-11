
const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
}
  

const encoder = (formData) => {
     encode({'form-name':'contact', ...formData})
}

export default encoder
