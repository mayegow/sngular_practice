class SeriesCalculate {
    static triangular = number => {
      return (number * (number + 1)) / 2
    }
  
    static fibonacci = number => {
      if (number <= 1){ 
        return number
      } 
  
      let a = 0
      let b = 1
  
      for (let i = 2; i <= number; i++) {
        const temp = a + b
        a = b
        b = temp
      }
  
      return b
    }

    
    static primo = number => {
      if (number < 2){
        return false
      }
  
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          return false
        }
      }
  
      return true
    }
  
    static calcSerie = number => {
        const result = (3 * this.fibonacci(number) - 3 * this.triangular(number-1)) / (number - 10) * this.primo(number + 2)
        return result
    }
  }

export default SeriesCalculate