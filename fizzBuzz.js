function fizzBuzz(num){
    if(num > 0){
    var arr=[]
    var result = ""
    var x = ""
   for(i=1;i<=num;i++){
        if(i%3==0&&i%5==0){
            arr[i-1] = 'FizzBuzz'
        }else if(i%3==0){
            arr[i-1] = 'Fizz'
        }else if(i%5==0){
            arr[i-1] = 'Buzz'
        }else{   
            x= i.toString()
            arr[i-1] = x
            
        }
        if(i==num){
            result = result+arr[i-1]
        }else{
            result = result+arr[i-1]+" "
        } 
    }
    return result
    }
    return false
}

module.exports = fizzBuzz;