document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositFeild  = document.getElementById('deposit-feild')
    const newDepositAmountString = depositFeild.value
    const newDepositAmount = parseFloat(newDepositAmountString)
    // console.log(depositAmount)
    const depositTotalElement = document.getElementById('deposit-total')
    const priviousDepositTotalString = depositTotalElement.innerText
    // console.log(typeof priviousDepositTotalString)
    const priviousDepositTotal = parseFloat(priviousDepositTotalString)
    // const newDepositTotal =  depositTotal+depositAmount
    // // console.log(depositTotal)
    // console.log(newDepositTotal)
    const currentDepositTotal = priviousDepositTotal + newDepositAmount
    depositTotalElement.innerText = currentDepositTotal
    const balanceTotalElement = document.getElementById('balance-total')
    const priviousBalanceTotalString = balanceTotalElement.innerText
    const priviousBalanceTotal = parseFloat(priviousBalanceTotalString)
    const currentBalancrTotal = priviousBalanceTotal + newDepositAmount
    balanceTotalElement.innerText = currentBalancrTotal
    depositFeild.value = ''
})