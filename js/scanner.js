function showhighestdelivery() {
    $('#HDLaptop').prop("checked", true);
    $('#HDMobile').prop("checked", true);
    
    $('.Highest_Delivery_Menu').show(1, function () {
        $('#highestdeliverynifty500').hide();
        $('#highestdeliveryfando').show();
        $("#HDniftytimestamp").hide();
        $("#HDfandotimestamp").show();
    });

    $('.Delivery_Spike_Menu').hide();
    $('.Strategy_Menu').hide();
    $('.Student_Portal_Menu').hide();
   
    $("#HDniftytimestamp").hide();
    $("#HDfandotimestamp").show();

    $('.highest_delivery_radiobutton').text('◉')
    $('.delivery_spike_radiobutton').text('')
    $('.strategy_radiobutton').text('')
    $('.student_portal_radiobutton').text('')
    
    $("#DeliveryScannerDiscription").show();
    $('#StrategyDiscription').hide();
    $('#StudentPortalDiscription').hide();
}

function showhighestdeliverynifty() {
    $("#HDniftytimestamp").show();
    $("#HDfandotimestamp").hide();
    $('#highestdeliverynifty500').show();
    $('#highestdeliveryfando').hide();
    if (callcount_for_HD_Nifty > 0) { return }
    Highest_Delivery_Nifty_Chart()
}

function showhighestdeliveryfando() {
    $("#HDniftytimestamp").hide();
    $("#HDfandotimestamp").show();
    $('#highestdeliverynifty500').hide();
    $('#highestdeliveryfando').show();
}

function showdeliveryspikenifty() {
    $('#deliveryspikenifty500').show();
    $('#deliveryspikefando').hide();
    $('#DeliverySpikeTimestamp').show();
    if (callcount_for_DS_Nifty > 0) { return }
    Delivery_Spike_Nifty_Chart()
}

function showdeliveryspikefando() {
    $('#deliveryspikenifty500').hide();
    $('#deliveryspikefando').show();
    $('#DeliverySpikeTimestamp').show();
}

function showdeliveryspike() {
    $('#DSLaptop').prop("checked", true);
    $('#DSMobile').prop("checked", true);

    $('.Delivery_Spike_Menu').show(1, function () {
        $('#deliveryspikenifty500').hide();
        $('#deliveryspikefando').show();
        $('#DeliverySpikeTimestamp').show();
    });

    $('.Highest_Delivery_Menu').hide();
    $('.Strategy_Menu').hide();
    $('.Student_Portal_Menu').hide();

    $('.highest_delivery_radiobutton').text('')
    $('.delivery_spike_radiobutton').text('◉')
    $('.strategy_radiobutton').text('')
    $('.student_portal_radiobutton').text('')

    $("#DeliveryScannerDiscription").show();
    $('#StrategyDiscription').hide();
    $('#StudentPortalDiscription').hide();

    if (callcount_for_DS_FandO > 0) { return }
    Delivery_Spike_FO_Chart()
}

function showstrategy(){
    $('.Highest_Delivery_Menu').hide();
    $('.Delivery_Spike_Menu').hide();
    $('.Strategy_Menu').show();
    $('.Student_Portal_Menu').hide();

    $('.highest_delivery_radiobutton').text('')
    $('.delivery_spike_radiobutton').text('')
    $('.strategy_radiobutton').text('◉')
    $('.student_portal_radiobutton').text('')

    $("#DeliveryScannerDiscription").hide();
    $('#StrategyDiscription').show();
    $('#StudentPortalDiscription').hide();
}

function showstudentportal(){
    $('.Highest_Delivery_Menu').hide();
    $('.Delivery_Spike_Menu').hide();
    $('.Strategy_Menu').hide();
    $('.Student_Portal_Menu').show();

    $('.highest_delivery_radiobutton').text('')
    $('.delivery_spike_radiobutton').text('')
    $('.strategy_radiobutton').text('')
    $('.student_portal_radiobutton').text('◉')

    $("#DeliveryScannerDiscription").hide();
    $('#StrategyDiscription').hide();
    $('#StudentPortalDiscription').show();
}

function showdropdown() {
    $("#Delivery_Scanner_Dropdown_Item").show();
    $(".Highest_Delivery_Menu").show();
}

function Highest_Delivery_Nifty_Chart() {
    var table = document.getElementById('HDdataniftyonly')
    $.ajax({
        method: 'GET',
        url: 'https://students.tradingcafeindia.com/calcApi2/fetch_hd_data_n500',
        success: function (response) {
            hddatanifty = response
            $("#HDniftytimestamp").text(moment(hddatanifty[0][4] * 1000).format('ddd MMM DD, YYYY') + " (IST) ");
            hd_data_n500 = []
            for (var j = 0; j < response.length; j++) {
                var x = parseFloat(response[j][5])
                hd_data_n500.push(x.toFixed(2))
            }
            for (var i = 0; i < response.length; i++) {
                var row = `<tr>
                <td>${response[i][0]}</td>
                <td>${response[i][1]}</td>
                <td>${response[i][2]}</td>
                <td>${hd_data_n500[i]}</td>
                <td>${response[i][3]}<progress max=100 value=${response[i][3]}></td>
                                      </tr>`
                table.innerHTML += row
            }
            DS = $('#highestdeliverynifty500').DataTable({
                "columnDefs": [
                    { targets: [0, 1, 2], className: 'dt-body-left' },
                    { targets: [3], className: 'dt-body-left' },
                ],
                paging: false,
                info: false,
                ordering: false,
                searching: false
            });
        }
    })
    callcount_for_HD_Nifty = callcount_for_HD_Nifty + 1;
}

function Highest_Delivery_FO_Chart() {
    var table = document.getElementById('HDdatafandoonly')
    $.ajax({
        method: 'GET',
        url: 'https://students.tradingcafeindia.com/calcApi2/fetch_hd_data_fno',
        success: function (response) {
            hddatafando = response
            $("#HDfandotimestamp").text(moment(hddatafando[0][4] * 1000).format('ddd MMM DD, YYYY') + " (IST) ");
            hd_data_fno = []
            for (var j = 0; j < response.length; j++) {
                var x = parseFloat(response[j][5])
                hd_data_fno.push(x.toFixed(2))
            }
            for (var i = 0; i < response.length; i++) {
                var row = `<tr>
                <td>${response[i][0]}</td>
                <td>${response[i][1]}</td>
                <td>${response[i][2]}</td>
                <td>${hd_data_fno[i]}</td>
                <td>${response[i][3]}<progress max=100 value=${response[i][3]}></td>
                                      </tr>`
                table.innerHTML += row
            }
            DS = $('#highestdeliveryfando').DataTable({
                "columnDefs": [
                    { targets: [0, 1, 2], className: 'dt-body-left' },
                    { targets: [3], className: 'dt-body-left' },],
                paging: false,
                info: false,
                ordering: false,
                searching: false
            });
        }
    })
    callcount_for_HD_FandO = callcount_for_HD_FandO + 1;
}

function Delivery_Spike_Nifty_Chart() {
    var table = document.getElementById('DSdataniftyonly')
    $.ajax({
        method: 'GET',
        url: 'https://students.tradingcafeindia.com/calcApi2/fetch_dsp_data_n500',
        success: function (response) {
            dsp_data_n500 = []
            for (var j = 0; j < response.length; j++) {
                var x = parseFloat(response[j][5])
                dsp_data_n500.push(x.toFixed(2))
            }
            for (var i = 0; i < response.length; i++) {
                var row = `<tr>
                <td>${response[i][0]}</td>
                <td>${response[i][1]}</td>
                <td>${dsp_data_n500[i]}</td>
                <td>${response[i][2]}<progress max=100 value=${response[i][2]}> </td>
                <td class=DSNIFTY>${response[i][3]}</td>
                                      </tr>`
                table.innerHTML += row
            }
            DS = $('#deliveryspikenifty500').DataTable({
                "columnDefs": [
                    { targets: [0, 1], className: 'dt-body-left' },
                    { targets: [2, 3], className: 'dt-body-left' },],
                paging: false,
                info: false,
                ordering: false,
                searching: false
            });
        }
    })
    callcount_for_DS_Nifty = callcount_for_DS_Nifty + 1;
}

function Delivery_Spike_FO_Chart() {
    var table = document.getElementById('DSdatafandoonly')
    $.ajax({
        method: 'GET',
        url: 'https://students.tradingcafeindia.com/calcApi2/fetch_dsp_data_fno',
        success: function (response) {
            $("#DeliverySpikeTimestamp").text(moment(response[0][4] * 1000).format('ddd MMM DD, YYYY') + " (IST) ");
            dsp_data_fno = []
            for (var j = 0; j < response.length; j++) {
                var x = parseFloat(response[j][5])
                dsp_data_fno.push(x.toFixed(2))
            }
            for (var i = 0; i < response.length; i++) {
                var row = `<tr>
                <td>${response[i][0]}</td>
                <td>${response[i][1]}</td>
                <td>${dsp_data_fno[i]}</td>
                <td>${response[i][2]}<progress max=100 value=${response[i][2]}></td>
                <td class=DSFO>${response[i][3]}</td>
                                      </tr>`
                table.innerHTML += row
            }
            DS = $('#deliveryspikefando').DataTable({
                "columnDefs": [
                    { targets: [0, 1], className: 'dt-body-left' },
                    { targets: [2, 3, 4], className: 'dt-body-left' },],
                paging: false,
                info: false,
                ordering: false,
                searching: false
            });
        }
    })
    callcount_for_DS_FandO = callcount_for_DS_FandO + 1;
}

$(document).ready(function () {
    callcount_for_HD_FandO = 0;
    callcount_for_HD_Nifty = 0;
    callcount_for_DS_FandO = 0;
    callcount_for_DS_Nifty = 0;
})