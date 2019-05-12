import ql from "./../../models/main_graphql"

const setDate = (data) => ({
    type: 'setDate',
    data: data
});

const delDate = (date) => ({
    type:'delDate',
    data:date
})

const newDate = (date) => ({
    type:'newDate',
    data:date
})


function getDateAsync ()
{

    return async function (dispatch)
    {
        var data = await  ql(
            `{
          getCalendar
            }
           `
       );
        return data['data']['getCalendar'];
    }
}


function delDateAsync (date)
{
    return async function (dispatch, state)
    {

        var data = await  ql(
                `mutation delDate($date:String){
               delDate(date:$date)
            }
           `,
                {
                    date: date
                });
        return data;
    }
}

function newDateAsync (date)
{
    return async function (dispatch, state)
    {

        var data = await  ql(
                `mutation newDate($date:String){
               newDate(date:$date)
            }
           `,
            {
                date: date
            });
        return data
    }
}



export {setDate,delDate , newDate, getDateAsync, delDateAsync, newDateAsync}