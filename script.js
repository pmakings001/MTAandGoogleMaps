$( document ).ready(function() 
    {
            $("#submitButton").click(function()
            {
                var APIKey = "AIzaSyBr3bzhlFFwtG9IIt_4eKG10p-Qhh93xls";
                var Trainicon = "http://www.iconsdb.com/icons/preview/orange/train-xl.png";
                var salesforceIcon = "https://success.salesforce.com/profilephoto/7293A000000AhqH/T";
                var trumpIcon = "http://cdn.images.express.co.uk/img/dynamic/galleries/64x64/181275.jpg";
                
                $.getJSON(
                "https://mtaapi.herokuapp.com/stop?id=D16S",
                
                function (response)
                {
                    var BryantParkName = response.result.name;
                    var BryantParkLat = response.result.lat;
                    var BryantParkLong = response.result.lon;
                    
                    
                    $.getJSON("https://mtaapi.herokuapp.com/stop?id=901N",
                
                    function (response)
                    {
                        var GrdCtrlName = response.result.name;
                        var GrdCtrlLat = response.result.lat;
                        var GrdCtrlLong = response.result.lon;
                        
                        
                        $.getJSON("https://mtaapi.herokuapp.com/stop?id=D15S",
                
                        function (response)
                        {
                            var RockName = response.result.name;
                            var RockLat = response.result.lat;
                            var RockLong = response.result.lon;
                            var RockLocation = RockLat + "," + RockLong;
                            $("#map").append("<img src=" + "https://maps.googleapis.com/maps/api/staticmap?zoom=16&size=2000x2000&" +
                            "markers=icon:" + Trainicon + "%7C" + GrdCtrlLat + "," + GrdCtrlLong + 
                            "&markers=icon:" + salesforceIcon + "%7C" + BryantParkLat + "," + BryantParkLong + 
                            "&markers=icon:" + trumpIcon + "%7C" + RockLocation + 
                            "&key=" + APIKey + ">");
                            
                            
                        });
                    });
                });
            });
                    
    });