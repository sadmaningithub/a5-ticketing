function seata1() {
    const seatsSelected = document.getElementById('seats-selected')
    const seatNumbers = seatsSelected.innerText
    const seat = parseInt(seatNumbers)
    const newSeatNumber = seat + 1;

    const seatsLeft = document.getElementById('seats-left')
    const seatLeftNumbers = seatsLeft.innerText
    const newSeatLeft = seatLeftNumbers - 1

    seatsLeft.innerText = newSeatLeft
    // console.log(seatLeftNumbers)
    // console.log(newSeatNumber)
    seatsSelected.innerText = newSeatNumber

    const element = document.getElementById('a1')
    element.classList.add('bg-[#1DD100]', 'selected')
    if (element.classList.contains('selected') === true) {
        const button = document.getElementById('a1')
        button.disabled = true

    }
    const seatNameContainer = document.getElementById('a1')
    const seatName = seatNameContainer.innerText
    // console.log(seatName)

    const table = document.getElementById('table-main')
    const tableRow = document.createElement('tr')
    const tableData1 = document.createElement('td')
    const tableData2 = document.createElement('td')
    const tableData3 = document.createElement('td')

    tableData1.innerText = seatName
    tableData2.innerText = 'Economy'
    tableData3.innerText = 550

    tableRow.appendChild(tableData1)
    tableRow.appendChild(tableData2)
    tableRow.appendChild(tableData3)
    table.appendChild(tableRow)

    const seatNumberCheck = document.getElementById('seats-selected')
    const seatNum = seatNumberCheck.innerText
    if (seatNum < 5) {
        console.log('Great')
    }
    else {
        alert('You cannot select more than 4 seats!')

    }

    const ticketPrice = document.getElementById('price')
    const priceNum = ticketPrice.innerText
    const priceMain = parseInt(priceNum)
    const newPrice = priceMain + 550
    ticketPrice.innerText = newPrice

    const grandTotal = document.getElementById('grand-total')
    const grandTotalNum = grandTotal.innerText
    const totalMain = parseInt(grandTotalNum)
    const newTotal = totalMain + 550
    grandTotal.innerText = newTotal



    


}


function seata2() {
    const seatsSelected = document.getElementById('seats-selected')
    const seatNumbers = seatsSelected.innerText
    const seat = parseInt(seatNumbers)
    const newSeatNumber = seat + 1;

    const seatsLeft = document.getElementById('seats-left')
    const seatLeftNumbers = seatsLeft.innerText
    const newSeatLeft = seatLeftNumbers - 1

    seatsLeft.innerText = newSeatLeft
    // console.log(seatLeftNumbers)
    // console.log(newSeatNumber)
    seatsSelected.innerText = newSeatNumber

    const element = document.getElementById('a2')
    element.classList.add('bg-[#1DD100]', 'selected')
    if (element.classList.contains('selected') === true) {
        const button = document.getElementById('a2')
        button.disabled = true
        button.classList.add('bg-[#1DD100]')
    }

    const seatNameContainer = document.getElementById('a2')
    const seatName = seatNameContainer.innerText
    // console.log(seatName)

    const table = document.getElementById('table-main')
    const tableRow = document.createElement('tr')
    const tableData1 = document.createElement('td')
    const tableData2 = document.createElement('td')
    const tableData3 = document.createElement('td')

    tableData1.innerText = seatName
    tableData2.innerText = 'Economy'
    tableData3.innerText = 550

    tableRow.appendChild(tableData1)
    tableRow.appendChild(tableData2)
    tableRow.appendChild(tableData3)
    table.appendChild(tableRow)

    const seatNumberCheck = document.getElementById('seats-selected')
    const seatNum = seatNumberCheck.innerText
    if (seatNum < 5) {
        console.log('Great')
    }
    else {
        alert('You cannot select more than 4 seats!')

    }

    const ticketPrice = document.getElementById('price')
    const priceNum = ticketPrice.innerText
    const priceMain = parseInt(priceNum)
    const newPrice = priceMain + 550
    ticketPrice.innerText = newPrice

    const grandTotal = document.getElementById('grand-total')
    const grandTotalNum = grandTotal.innerText
    const totalMain = parseInt(grandTotalNum)
    const newTotal = totalMain + 550
    grandTotal.innerText = newTotal


}

function seata3() {
    const seatsSelected = document.getElementById('seats-selected')
    const seatNumbers = seatsSelected.innerText
    const seat = parseInt(seatNumbers)
    const newSeatNumber = seat + 1;

    const seatsLeft = document.getElementById('seats-left')
    const seatLeftNumbers = seatsLeft.innerText
    const newSeatLeft = seatLeftNumbers - 1

    seatsLeft.innerText = newSeatLeft
    // console.log(seatLeftNumbers)
    // console.log(newSeatNumber)
    seatsSelected.innerText = newSeatNumber

    const element = document.getElementById('a3')
    element.classList.add('bg-[#1DD100]', 'selected')
    if (element.classList.contains('selected') === true) {
        const button = document.getElementById('a3')
        button.disabled = true
        button.classList.add('bg-[#1DD100]')
    }

    const seatNameContainer = document.getElementById('a3')
    const seatName = seatNameContainer.innerText
    // console.log(seatName)

    const table = document.getElementById('table-main')
    const tableRow = document.createElement('tr')
    const tableData1 = document.createElement('td')
    const tableData2 = document.createElement('td')
    const tableData3 = document.createElement('td')

    tableData1.innerText = seatName
    tableData2.innerText = 'Economy'
    tableData3.innerText = 550

    tableRow.appendChild(tableData1)
    tableRow.appendChild(tableData2)
    tableRow.appendChild(tableData3)
    table.appendChild(tableRow)

    const seatNumberCheck = document.getElementById('seats-selected')
    const seatNum = seatNumberCheck.innerText
    if (seatNum < 5) {
        console.log('Great')
    }
    else {
        alert('You cannot select more than 4 seats!')

    }

    const ticketPrice = document.getElementById('price')
    const priceNum = ticketPrice.innerText
    const priceMain = parseInt(priceNum)
    const newPrice = priceMain + 550
    ticketPrice.innerText = newPrice

    const grandTotal = document.getElementById('grand-total')
    const grandTotalNum = grandTotal.innerText
    const totalMain = parseInt(grandTotalNum)
    const newTotal = totalMain + 550
    grandTotal.innerText = newTotal


}

function seata4() {
    const seatsSelected = document.getElementById('seats-selected')
    const seatNumbers = seatsSelected.innerText
    const seat = parseInt(seatNumbers)
    const newSeatNumber = seat + 1;

    const seatsLeft = document.getElementById('seats-left')
    const seatLeftNumbers = seatsLeft.innerText
    const newSeatLeft = seatLeftNumbers - 1

    seatsLeft.innerText = newSeatLeft
    // console.log(seatLeftNumbers)
    // console.log(newSeatNumber)
    seatsSelected.innerText = newSeatNumber

    const element = document.getElementById('a4')
    element.classList.add('bg-[#1DD100]', 'selected')
    if (element.classList.contains('selected') === true) {
        const button = document.getElementById('a4')
        button.disabled = true
        button.classList.add('bg-[#1DD100]')
    }

    const seatNameContainer = document.getElementById('a4')
    const seatName = seatNameContainer.innerText
    // console.log(seatName)

    const table = document.getElementById('table-main')
    const tableRow = document.createElement('tr')
    const tableData1 = document.createElement('td')
    const tableData2 = document.createElement('td')
    const tableData3 = document.createElement('td')

    tableData1.innerText = seatName
    tableData2.innerText = 'Economy'
    tableData3.innerText = 550

    tableRow.appendChild(tableData1)
    tableRow.appendChild(tableData2)
    tableRow.appendChild(tableData3)
    table.appendChild(tableRow)

    const seatNumberCheck = document.getElementById('seats-selected')
    const seatNum = seatNumberCheck.innerText
    if (seatNum < 5) {
        console.log('Great')
    }
    else {
        alert('You cannot select more than 4 seats!')

    }

    const ticketPrice = document.getElementById('price')
    const priceNum = ticketPrice.innerText
    const priceMain = parseInt(priceNum)
    const newPrice = priceMain + 550
    ticketPrice.innerText = newPrice

    const grandTotal = document.getElementById('grand-total')
    const grandTotalNum = grandTotal.innerText
    const totalMain = parseInt(grandTotalNum)
    const newTotal = totalMain + 550
    grandTotal.innerText = newTotal


}

function seatb1() {
    const seatsSelected = document.getElementById('seats-selected')
    const seatNumbers = seatsSelected.innerText
    const seat = parseInt(seatNumbers)
    const newSeatNumber = seat + 1;

    const seatsLeft = document.getElementById('seats-left')
    const seatLeftNumbers = seatsLeft.innerText
    const newSeatLeft = seatLeftNumbers - 1

    seatsLeft.innerText = newSeatLeft
    // console.log(seatLeftNumbers)
    // console.log(newSeatNumber)
    seatsSelected.innerText = newSeatNumber

    const element = document.getElementById('b1')
    element.classList.add('bg-[#1DD100]', 'selected')
    if (element.classList.contains('selected') === true) {
        const button = document.getElementById('b1')
        button.disabled = true
        button.classList.add('bg-[#1DD100]')
    }

    const seatNameContainer = document.getElementById('b1')
    const seatName = seatNameContainer.innerText
    // console.log(seatName)

    const table = document.getElementById('table-main')
    const tableRow = document.createElement('tr')
    const tableData1 = document.createElement('td')
    const tableData2 = document.createElement('td')
    const tableData3 = document.createElement('td')

    tableData1.innerText = seatName
    tableData2.innerText = 'Economy'
    tableData3.innerText = 550

    tableRow.appendChild(tableData1)
    tableRow.appendChild(tableData2)
    tableRow.appendChild(tableData3)
    table.appendChild(tableRow)

    const seatNumberCheck = document.getElementById('seats-selected')
    const seatNum = seatNumberCheck.innerText
    if (seatNum < 5) {
        console.log('Great')
    }
    else {
        alert('You cannot select more than 4 seats!')

    }

    const ticketPrice = document.getElementById('price')
    const priceNum = ticketPrice.innerText
    const priceMain = parseInt(priceNum)
    const newPrice = priceMain + 550
    ticketPrice.innerText = newPrice

    const grandTotal = document.getElementById('grand-total')
    const grandTotalNum = grandTotal.innerText
    const totalMain = parseInt(grandTotalNum)
    const newTotal = totalMain + 550
    grandTotal.innerText = newTotal


}

function seatb2() {
    const seatsSelected = document.getElementById('seats-selected')
    const seatNumbers = seatsSelected.innerText
    const seat = parseInt(seatNumbers)
    const newSeatNumber = seat + 1;

    const seatsLeft = document.getElementById('seats-left')
    const seatLeftNumbers = seatsLeft.innerText
    const newSeatLeft = seatLeftNumbers - 1

    seatsLeft.innerText = newSeatLeft
    // console.log(seatLeftNumbers)
    // console.log(newSeatNumber)
    seatsSelected.innerText = newSeatNumber

    const element = document.getElementById('b2')
    element.classList.add('bg-[#1DD100]', 'selected')
    if (element.classList.contains('selected') === true) {
        const button = document.getElementById('b2')
        button.disabled = true
        button.classList.add('bg-[#1DD100]')
    }

    const seatNameContainer = document.getElementById('b2')
    const seatName = seatNameContainer.innerText
    // console.log(seatName)

    const table = document.getElementById('table-main')
    const tableRow = document.createElement('tr')
    const tableData1 = document.createElement('td')
    const tableData2 = document.createElement('td')
    const tableData3 = document.createElement('td')

    tableData1.innerText = seatName
    tableData2.innerText = 'Economy'
    tableData3.innerText = 550

    tableRow.appendChild(tableData1)
    tableRow.appendChild(tableData2)
    tableRow.appendChild(tableData3)
    table.appendChild(tableRow)

    const seatNumberCheck = document.getElementById('seats-selected')
    const seatNum = seatNumberCheck.innerText
    if (seatNum < 5) {
        console.log('Great')
    }
    else {
        alert('You cannot select more than 4 seats!')

    }

    const ticketPrice = document.getElementById('price')
    const priceNum = ticketPrice.innerText
    const priceMain = parseInt(priceNum)
    const newPrice = priceMain + 550
    ticketPrice.innerText = newPrice

    const grandTotal = document.getElementById('grand-total')
    const grandTotalNum = grandTotal.innerText
    const totalMain = parseInt(grandTotalNum)
    const newTotal = totalMain + 550
    grandTotal.innerText = newTotal


}

function seatb3() {
    const seatsSelected = document.getElementById('seats-selected')
    const seatNumbers = seatsSelected.innerText
    const seat = parseInt(seatNumbers)
    const newSeatNumber = seat + 1;

    const seatsLeft = document.getElementById('seats-left')
    const seatLeftNumbers = seatsLeft.innerText
    const newSeatLeft = seatLeftNumbers - 1

    seatsLeft.innerText = newSeatLeft
    // console.log(seatLeftNumbers)
    // console.log(newSeatNumber)
    seatsSelected.innerText = newSeatNumber

    const element = document.getElementById('b3')
    element.classList.add('bg-[#1DD100]', 'selected')
    if (element.classList.contains('selected') === true) {
        const button = document.getElementById('b3')
        button.disabled = true
        button.classList.add('bg-[#1DD100]')
    }

    const seatNameContainer = document.getElementById('b3')
    const seatName = seatNameContainer.innerText
    // console.log(seatName)

    const table = document.getElementById('table-main')
    const tableRow = document.createElement('tr')
    const tableData1 = document.createElement('td')
    const tableData2 = document.createElement('td')
    const tableData3 = document.createElement('td')

    tableData1.innerText = seatName
    tableData2.innerText = 'Economy'
    tableData3.innerText = 550

    tableRow.appendChild(tableData1)
    tableRow.appendChild(tableData2)
    tableRow.appendChild(tableData3)
    table.appendChild(tableRow)

    const seatNumberCheck = document.getElementById('seats-selected')
    const seatNum = seatNumberCheck.innerText
    if (seatNum < 5) {
        console.log('Great')
    }
    else {
        alert('You cannot select more than 4 seats!')

    }

    const ticketPrice = document.getElementById('price')
    const priceNum = ticketPrice.innerText
    const priceMain = parseInt(priceNum)
    const newPrice = priceMain + 550
    ticketPrice.innerText = newPrice

    const grandTotal = document.getElementById('grand-total')
    const grandTotalNum = grandTotal.innerText
    const totalMain = parseInt(grandTotalNum)
    const newTotal = totalMain + 550
    grandTotal.innerText = newTotal


}

function seatb4() {
    const seatsSelected = document.getElementById('seats-selected')
    const seatNumbers = seatsSelected.innerText
    const seat = parseInt(seatNumbers)
    const newSeatNumber = seat + 1;

    const seatsLeft = document.getElementById('seats-left')
    const seatLeftNumbers = seatsLeft.innerText
    const newSeatLeft = seatLeftNumbers - 1

    seatsLeft.innerText = newSeatLeft
    // console.log(seatLeftNumbers)
    // console.log(newSeatNumber)
    seatsSelected.innerText = newSeatNumber

    const element = document.getElementById('b4')
    element.classList.add('bg-[#1DD100]', 'selected')
    if (element.classList.contains('selected') === true) {
        const button = document.getElementById('b4')
        button.disabled = true
        button.classList.add('bg-[#1DD100]')
    }


    const seatNameContainer = document.getElementById('b4')
    const seatName = seatNameContainer.innerText
    // console.log(seatName)

    const table = document.getElementById('table-main')
    const tableRow = document.createElement('tr')
    const tableData1 = document.createElement('td')
    const tableData2 = document.createElement('td')
    const tableData3 = document.createElement('td')

    tableData1.innerText = seatName
    tableData2.innerText = 'Economy'
    tableData3.innerText = 550

    tableRow.appendChild(tableData1)
    tableRow.appendChild(tableData2)
    tableRow.appendChild(tableData3)
    table.appendChild(tableRow)

    const seatNumberCheck = document.getElementById('seats-selected')
    const seatNum = seatNumberCheck.innerText
    if (seatNum < 5) {
        console.log('Great')
    }
    else {
        alert('You cannot select more than 4 seats!')

    }

    const ticketPrice = document.getElementById('price')
    const priceNum = ticketPrice.innerText
    const priceMain = parseInt(priceNum)
    const newPrice = priceMain + 550
    ticketPrice.innerText = newPrice

    const grandTotal = document.getElementById('grand-total')
    const grandTotalNum = grandTotal.innerText
    const totalMain = parseInt(grandTotalNum)
    const newTotal = totalMain + 550
    grandTotal.innerText = newTotal

}


function couponApply(){
    const couponCodeS = 'NEW15';
    const couponCodeC = 'Couple 20'

    const inputContainer = document.getElementById('coupon')
    const inputText = inputContainer.value
    
    if(inputText === couponCodeS || inputText === couponCodeC){
        console.log('Discount')
        const buttonToHide = document.getElementById('coupon-apply')
        buttonToHide.classList.add('hidden')
    }
    else{
        console.log('Sad')
    }
}

