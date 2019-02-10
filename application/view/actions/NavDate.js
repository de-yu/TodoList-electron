import ql from "./../../../application/models/main_graphql"

        const setDate = (data) => ({
        type: 'setDate',
        data: data
    })


function getDate ()
{

    return async function (dispatch)
    {
        var data = await  ql(
                `{
              getCalendar
                }
               `
       );

        var newdata = {};

        _.forEach(data['data']['getCalendar'], function (value)
        {
            var date = value.split("-");

            if(!newdata.hasOwnProperty(date[0])){
                newdata[date[0]] = {};
            }
            if(!newdata[date[0]].hasOwnProperty(date[1])){
                newdata[date[0]][date[1]] = [];
            }
            newdata[date[0]][date[1]].push(date[2]);

        });

        return newdata;
        /*
         dispatch(setDate(
         data,
         ));*/
    }
}


function delDate (date)
{
    return async function (dispatch, state)
    {

        var data = await  ql(
                `mutation delDate($date:String){
               delDate(date:$date)
            }
           `
                ,
                {
                    date: date
                });

        dispatch(setDate(data))
    }
}

function newDate (date)
{
    return async function (dispatch, state)
    {

        var data = await  ql(
                `mutation newDate($date:String){
               newDate(date:$date)
            }
           `
                ,
                {
                    date: date
                });

        dispatch(setDate(data))

    }
}



export {setDate, getDate, delDate, newDate}