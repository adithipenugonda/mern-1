let date1 = new Date(2022,0,1)
let date2 = new Date(2024,0,1)

//find difference

if(date1 > date2)
{
    [date1, date2] = [date2, date1] // swapping
}

//find years 
let years=date2.getFullYear()-date1.getFullYear()
let months=date2.getMonth()-date1.getMonth()


if(months<0)
{
    years--;
    months=months+12
}

if(days<0)
{
    months--;
}
console.log("Years :", years)
console.log("Months :", months)