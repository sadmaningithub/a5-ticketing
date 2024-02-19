
document.getElementById('to-ticket-btn').addEventListener('click', function () {
    const ticketBookingContainer = document.getElementById('ticket-container')
    ticketBookingContainer.scrollIntoView()
})



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


function couponApply() {
    const couponCodeS = 'NEW15';
    const couponCodeC = 'Couple 20'

    const inputContainer = document.getElementById('coupon')
    const inputText = inputContainer.value

    if (inputText === couponCodeS || inputText === couponCodeC) {


        const buttonToHide = document.getElementById('coupon-apply')
        buttonToHide.classList.add('hidden')

        const textShow = document.getElementById('price-show')
        textShow.classList.remove('hidden')

        const grandTotalSection = document.getElementById('grand-total-section')
        grandTotalSection.classList.add('hidden')

        const totalPriceSection = document.getElementById('total-price')
        totalPriceSection.classList.add('hidden')





        const totalPrice = document.getElementById('price')
        const totalPriceNum = totalPrice.innerText
        const totalPriceMain = parseInt(totalPriceNum)

        if (inputText === couponCodeS) {
            const priceFinal = totalPriceMain - totalPriceMain * 0.15
            const priceToShow = document.getElementById('discount-text')
            priceToShow.innerText = priceFinal

        }
        else {
            const priceFinal = totalPriceMain - totalPriceMain * 0.20
            const priceToShow = document.getElementById('discount-text')
            priceToShow.innerText = priceFinal
        }


    }
    else {
        console.log('Sad')
    }
}

function toModal() {

    const seatNumber = document.getElementById('seats-selected')
    const seatNum = seatNumber.innerText


    if (seatNum > 0) {
        const modal = document.getElementById('modal-section')
        modal.classList.remove('hidden')

        const nav = document.getElementById('nav-section')
        nav.classList.add('hidden')

        const banner = document.getElementById('banner-section')
        banner.classList.add('hidden')

        const badge = document.getElementById('badge-section')
        badge.classList.add('hidden')

        const coupon = document.getElementById('coupon-section')
        coupon.classList.add('hidden')

        const info = document.getElementById('ticket-info')
        info.classList.add('hidden')
    }
    else{
        alert('Please select ticket first')
    }



}


document.getElementById('modal-btn').addEventListener('click', function () {
    window.location.reload()
})




