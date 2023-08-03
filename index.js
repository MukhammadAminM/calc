let form = document.forms.register
let arr = [
    
]

form.onsubmit = () => {
    event.preventDefault()
    let total_balance = 0
    
    let obj = {
        total: 0
    }
    let fm = new FormData(event.target)
    
    fm.forEach((value, key) => {
        if(key.includes('balance')){
            obj[key]  = +value
            obj.total = +value
        }else if(key.includes('expense_num')){
            obj[key] = +value
            obj.total = obj.total - parseInt(value)
        }else if(key.includes('income_num')){
            obj[key] = +value
            obj.total = obj.total + parseInt(value)   
        }else{
            obj[key] = value
        }
    }) 

    arr.push(obj)

    total_balance = arr[0].total

    alert('Ваш общий баланс ' + total_balance)
    
}
