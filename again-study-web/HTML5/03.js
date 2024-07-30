
function storageSetItem(name, data) {
  return new Promise((resolve, reject) => {
      if (data) {
          localStorage.setItem(name, JSON.stringify(data))
          resolve("success")
      } else {
          reject(new Error("储存失败"))
      }
  })
}

function storageGetItem(name) {

  return JSON.parse(localStorage.getItem(name))
}

function storageRemoveItem(name) {
  return new Promise((resolve, reject) => {
      if (name) {
          localStorage.removeItem(name)
          resolve("success")
      } else {
          localStorage.clear();
          resolve("success")
      }
  })
}