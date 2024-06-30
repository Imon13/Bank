document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawFeild = document.getElementById('withdraw-feild')
    const newWithdrawAmountString = withdrawFeild.value
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)
    const withdrawTotalAmount = document.getElementById('withdraw-total')
    const priviousWithdrawTotalString = withdrawTotalAmount.innerText
    const priviousWithdrawTotal = parseFloat(priviousWithdrawTotalString)
   
    const balanceTotalElement = document.getElementById('balance-total')
    const priviousBalanceTotalString = balanceTotalElement.innerText
    const priviousBalanceTotal = parseFloat(priviousBalanceTotalString)
    if(newWithdrawAmount>priviousBalanceTotal){
        alert(' Insufficent balance ! You cant with draw that much money')
    }
    else{
        const currentWithdrawTotal =  newWithdrawAmount + priviousWithdrawTotal
        withdrawTotalAmount.innerText = currentWithdrawTotal
        const currentBalancrTotal = priviousBalanceTotal - newWithdrawAmount
    balanceTotalElement.innerText = currentBalancrTotal
   
    }
     withdrawFeild.value = ''

})