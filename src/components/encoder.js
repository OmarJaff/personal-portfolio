
const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
}


const encoder = (formData) => {
  return encode({ 'form-name': 'contact',...formData })
}



export default encoder
