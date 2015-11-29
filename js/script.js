

var pro = ["北京","天津","上海","重庆","河北","山西","辽宁","吉林","黑龙江","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","海南","四川","贵州","云南","陕西","甘肃","青海","内蒙古","广西","西藏","宁夏","新疆维吾尔自治区","香港","澳门","台湾"];

var city = {"北京":["东城区","西城区","崇文区","宣武区","朝阳区","海淀区","丰台区","石景山区","房山区","通州区","顺义区","昌平区","大兴区","怀柔区","平谷区","门头沟区","密云县","延庆县"],天津:["和平区","河东区","河西区","南开区","河北区","红桥区","东丽区","西青区","北辰区","津南区","武清区","宝坻区","滨海新区","静海县","宁河县","蓟县"],上海:["黄浦区","卢湾区","徐汇区","长宁区","静安区","普陀区","闸北区","虹口区","杨浦区","闵行区","宝山区","嘉定区","浦东新区","金山区","松江区","青浦区","奉贤区","崇明县"],重庆:["渝中区","大渡口区","江北区","南岸区","北碚区","渝北区","巴南区","长寿区","双桥区","沙坪坝区","万盛区","万州区","涪陵区","黔江区","永川区","合川区","江津区","九龙坡区","南川区","綦江县","潼南县","荣昌县","璧山县","大足县","铜梁县","梁平县","开县","忠县","城口县","垫江县","武隆县","丰都县","奉节县","云阳县","巫溪县","巫山县","石柱土家族自治县","秀山土家族苗族自治县","酉阳土家族苗族自治县","彭水苗族土家族自治县"],河北:["石家庄","唐山","秦皇岛","邯郸","邢台","保定","张家口","承德","沧州","廊坊","衡水"],山西:["太原","大同","阳泉","长治","晋城","朔州","晋中","运城","忻州","临汾","吕梁"],辽宁:["沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛"],吉林:["长春","吉林","四平","辽源","通化","白山","松原","白城","延边朝鲜族自治州"],黑龙江:["哈尔滨","齐齐哈尔","鹤岗","双鸭山","鸡西","大庆","伊春","牡丹江","佳木斯","七台河","黑河","绥化","大兴安岭"],江苏:["南京","苏州","无锡","常州","镇江","南通","泰州","扬州","盐城","连云港","徐州","淮安","宿迁"],浙江:["杭州","宁波","温州","嘉兴","湖州","绍兴","金华","衢州","舟山","台州","丽水"],安徽:["合肥","芜湖","蚌埠","淮南","马鞍山","淮北","铜陵","安庆","黄山","滁州","阜阳","宿州","巢湖","六安","亳州","池州","宣城"],福建:["福州","厦门","莆田","三明","泉州","漳州","南平","龙岩","宁德"],江西:["南昌","景德镇","萍乡","九江","新余","鹰潭","赣州","吉安","宜春","抚州","上饶"],山东:["济南","青岛","淄博","枣庄","东营","烟台","潍坊","济宁","泰安","威海","日照","莱芜","临沂","德州","聊城","滨州","菏泽"],河南:["郑州","开封","洛阳","平顶山","安阳","鹤壁","新乡","焦作","濮阳","许昌","漯河","三门峡","南阳","商丘","信阳","周口","驻马店"],湖北:["武汉","黄石","十堰","荆州","宜昌","襄樊","鄂州","荆门","孝感","黄冈","咸宁","随州","恩施"],湖南:["长沙","株洲","湘潭","衡阳","邵阳","岳阳","常德","张家界","益阳","郴州","永州","怀化","娄底","湘西"],广东:["广州","深圳","珠海","汕头","韶关","佛山","江门","湛江","茂名","肇庆","惠州","梅州","汕尾","河源","阳江","清远","东莞","中山","潮州","揭阳","云浮"],海南:["海口","三亚"],四川:["成都","自贡","攀枝花","泸州","德阳","绵阳","广元","遂宁","内江","乐山","南充","眉山","宜宾","广安","达州","雅安","巴中","资阳","阿坝","甘孜","凉山"],贵州:["贵阳","六盘水","遵义","安顺","铜仁","毕节","黔西南","黔东南","黔南"],云南:["昆明","曲靖","玉溪","保山","昭通","丽江","普洱","临沧","德宏","怒江","迪庆","大理","楚雄","红河","文山","西双版纳"],陕西:["西安","铜川","宝鸡","咸阳","渭南","延安","汉中","榆林","安康","商洛"],甘肃:["兰州","嘉峪关","金昌","白银","天水","武威","酒泉","张掖","庆阳","平凉","定西","陇南","临夏","甘南"],青海:["西宁","海东","海北","海南","黄南","果洛","玉树","海西"],内蒙古:["呼和浩特","包头","乌海","赤峰","通辽","鄂尔多斯","呼伦贝尔","巴彦淖尔","乌兰察布","锡林郭勒盟","兴安盟","阿拉善盟"],广西:["南宁","柳州","桂林","梧州","北海","防城港","钦州","贵港","玉林","百色","贺州","河池","来宾","崇左"],西藏:["拉萨","那曲","昌都","林芝","山南","日喀则","阿里"],宁夏:["银川","石嘴山","吴忠","固原","中卫"],新疆维吾尔自治区:["乌鲁木齐","克拉玛依","吐鲁番","哈密","和田","阿克苏","喀什","克孜勒苏","巴音郭楞","昌吉","博尔塔拉","伊犁","塔城","阿勒泰"],香港:["香港岛","九龙东","九龙西","新界东","新界西"],澳门:["澳门半岛","离岛"],台湾:["台北","高雄","基隆","新竹","台中","嘉义","台南市"]};

var carFactory=["车厂1","车厂2","车厂3","车厂4","车厂5","车厂6"];

var batteryPlants=["电池厂1","电池厂2","电池厂3","电池厂4","电池厂5","电池厂6"];

var dataA=new Array();
    dataA[0]='单体ID';
    dataA[1]='电池组ID';
    dataA[2]='车厂名称';
    dataA[3]='车辆用途';
    dataA[4]='地区';
    dataA[5]='状态';
    dataA[6]='运行时间';
    dataA[7]='下载';
    dataA[8]='批量梯次处理';
    dataA[9]='批量回收处理';

var str1="<tr><td><input type=\"checkbox\"></td>";
for(var i=0;i<dataA.length;i++){
    str1+="<td>"+dataA[i]+"</td>";
    if(i==dataA.length-1){
        str1+="</tr>"
    }
}

var getSearchValue = function(){
    var allInfo = {};
    allInfo.batteryID = $("#batteryId").val();
    allInfo.BMSID = $("#BMSID").val();
    allInfo.carFactory = $("#carFactory").val();
    allInfo.batteryPlants = $("#batteryPlants").val();
    allInfo.useOfCar = $("#useOfCar").val();
    allInfo.startTime = $("#startTime").val();
    allInfo.endTime = $("#endTime").val();
    allInfo.alarmStatus = $("#alarmStatus").val();
    allInfo.province = $("#pro").val();
    allInfo.city = $("#city").val();
    console.log(allInfo);
}

$(document).ready(
    function(){
        var i=0;
        $('.form_date').datetimepicker({
            language:'zh-CN',
            format:"yyyy-mm-dd",
            weekStart: 1,/*一周从哪一天开始 0表示星期天*/
            todayBtn:  1,/*日期时间选择器组件的底部显示一个 "Today" 按钮用以选择当前日期。*/
    		autoclose: 1, /*当选择一个日期之后是否立即关闭此日期时间选择器。*/
    		todayHighlight: 1,/*如果为true, 高亮当前日期*/
    		startView: 2,/*日期时间选择器打开之后首先显示的视图。 2 or 'month' for month view (the default)*/
    		minView: 2,
    		forceParse: 0, /*当选择器关闭的时候，是否强制解析输入框中的值。*/
            /*showMeridian: 1 选项里是否有天或小时*/
        });
        
        optionInsert(carFactory,"#carFactory");
        optionInsert(batteryPlants,"#batteryPlants");
        
        for(var i=0;i<pro.length;i++){
            $option=$("<option/>")
            $option.attr("value",pro[i]);
            $option.attr("class","prov");
            $option.text(pro[i]);
            $("#pro").append($option);
        }

        //省份二级联动
        $("#pro").change(function(){
            var cities=city[$(this).val()];
            $("#city").empty();
            for(var i=0;i<cities.length;i++){
                $option=$("<option/>")
                $option.attr("value",cities[i]);
                $option.text(cities[i]);
                $("#city").append($option);
            }
        });
            
        $('#btn-Search').click(function(){
            var flag=isDateLegal();
            if(flag){
            refresh();
            refreshNav();
            //获取各个字段的值.JSON对象
            var searchInfo = getSearchValue();
            //把JSON传出去，收回来一个数组
            var getInfo = "";
            /*$.ajax({
                type: "GET",
                url:"",
                data:searchInfo,
                success:function(msg){
                    console.log(msg);
                }
            });*/
            $('#head-data').append(str1);
            for(i=0;i<42;i++){
                i%2 == 0 ? combineDataA() : combineDataB();
                dataInsert(dataA);
            } 
            $('#content-data tr').hide();
            paging(10);
            }else{
                refresh();
                refreshNav();
            }
        });

        //单体ID点击事件
        $("#content-data").on("click", "td", function() {
            var theIndex = $(this).index();
            if(theIndex == 1){
                batteryId = $(this).text();
                batteryIdInCokkie(batteryId);
                //跳转到电池页
                window.location = "SoloBatteryInfo.html";
            }
            console.log(theIndex);
        });

        //获取单体电池ID
        var temp = getCookie("batteryId");
        console.log(temp);
        $("#BatLeaveFactory legend span").text(temp);

        //头部动画效果
        $("#topNav ul li").mouseover(function(){
            $(this).css({backgroundColor:"#777"});
            $(this).children().css({color:"white"});
        });
        $("#topNav ul li").mouseout(function(){
            $(this).css({backgroundColor:"#F8F8F8"}); 
            $(this).children().css({color:"black"});
        });
        
        //单击保存按钮时
         $("#content-data").on("click", "td", function() {
            var theIndex = $(this).index();
            if(theIndex == 8){
            var r=confirm("要保存电池单体“电池ID”从“起始时间”至“终止时间”的全部数据？");
            if (r==true)
             {
             document.write("下载页面");
             }
             else
             {
             javascript:void(0);
             } 
            }
            console.log(theIndex);
        });

});


//插入首页表的函数,这里先不设参数，就是认为往名为data的表里放数
//要想封装得更好，最好有一个更改dataA的函数，下面的dataInsert用i来实现str，而不需要上面click事件的for循环
function dataInsert(a){
    var str="<tr><td><input type=\"checkbox\"></td>";
    for(var i=0;i<a.length;i++){
    str+="<td>"+a[i]+"</td>";
    if(i==a.length-1){
        str+="</tr>"
    }
}
     $('#content-data').append(str);
}

//分页的函数

function paging(n){
    var rowsShow=n;
    var rowsTotal=$('#content-data tr').length;
    var numPages=Math.ceil(rowsTotal/rowsShow);
    var i=0;
    for(i=0;i<numPages;i++){
        var pageNum=i+1;
        $('#table-nav').append('<a href="#" rel="'+i+'">'+pageNum+'</a>');
    }
    $('#content-data tr').slice(0,rowsShow).show();
    $('#table-nav a:eq(0)').addClass('table-navActive');
    $('#table-nav a').bind('click',function(){
        $('#table-nav a').removeClass('table-navActive');
        $(this).addClass('table-navActive');
         var currentPage=$(this).attr('rel');
        if(currentPage >= 0 && currentPage < pageNum){
            var startItem= currentPage*rowsShow;
            var endItem=startItem+rowsShow;
            $('#content-data tr').css('opacity','0.0').hide().slice(startItem,endItem).css('display','table-row').animate({opacity:1},800);
        }
       
        
    });
    
}



//刷新查询的表
function refresh(){
    var title=document.getElementById("head-data");
    for(var i=title.childNodes.length-1;i>=0;i--){
        title.removeChild(title.childNodes[i]);
    }
    var newBody=document.getElementById("content-data");
    for(var i=newBody.childNodes.length-1;i>=0;i--){
        newBody.removeChild(newBody.childNodes[i]);
    }
}

function refreshNav(){
    var title=document.getElementById("table-nav");
    for(var i=title.childNodes.length-1;i>=0;i--){
        title.removeChild(title.childNodes[i]);
    }
}

function combineDataA(){//这括号里应该是有参数的
    dataA[0]='<a href="javascript:void(0)">111</a>';
    dataA[1]='356';
    dataA[2]='Rfii';
    dataA[3]='Transport';
    dataA[4]='北京';
    dataA[5]='<div class="greenTd">绿灯</div>';
    dataA[6]='3';
    dataA[7]='<button type="button" class="btn btn-sm btn-default" id="btn-download">下载</button>';
    dataA[8]='<button type="button" class="btn btn-sm btn-default" id="btn-echelon">批量梯次处理</button>';
    dataA[9]='<button type="button" class="btn btn-sm btn-default" id="btn-recycle">批量回收处理</button>';
}
function combineDataB(){//这括号里应该是有参数的
    dataA[0]='<a href="javascript:void(0)">222</a>';
    dataA[1]='356';
    dataA[2]='Rfii';
    dataA[3]='Transport';
    dataA[4]='天津';
    dataA[5]='<div class="greenTd">绿灯</div>';
    dataA[6]='3';
    dataA[7]='<button type="button" class="btn btn-sm btn-default" id="btn-download">下载</button>';
    dataA[8]='<button type="button" class="btn btn-sm btn-default" id="btn-echelon">批量梯次处理</button>';
    dataA[9]='<button type="button" class="btn btn-sm btn-default" id="btn-recycle">批量回收处理</button>';
}

//插入select元素
function optionInsert(optionArray,idName){
    for(var i=0;i<optionArray.length;i++){
            $option=$("<option/>");
            $option.attr("value",optionArray[i]);
            $option.text(optionArray[i]);
            $(idName).append($option);
        }
}

//判断输入的日期是否合法 
function isDateLegal(){
    var dateOne=document.getElementById('date1').value;
    var dateTwo=document.getElementById('date2').value;
    var str11=dateOne.slice(0,4);
    var str21=dateTwo.slice(0,4);
        str11=str11*1;
        str21=str21*1;
    var str12=dateOne.slice(5,7);
    var str22=dateTwo.slice(5,7);
        str12=str12*1;
        str22=str22*1;
    var str13=dateOne.slice(8,10);
    var str23=dateTwo.slice(8,10);
        str13=str13*1;
        str23=str23*1;
   if(str11>str21 || str12>str22 || str13>str23 ){
        alert("起始时间不能大于截至时间");
        return false;
   }else{
        return true;
   }
    
}
/*
By:FR
2015/11/15
作用：处理单体电池ID点击信息，将值存入COOKIE，并跳转到电池单体页面
参数：电池ID值
返回值：无
*/
function batteryIdInCokkie(batteryId){
    document.cookie = "batteryId="+batteryId;
}

/*
By:FR
2015/11/15
作用：获取Cookie中的电池单体ID值
参数：cookie名称
返回值：cookie值
*/

function getCookie(str){
    var allcookies = document.cookie;
    var value = "";
    var pos = allcookies.indexOf(str+"=");
    if(pos!=-1){
        var start = pos+str.length+1;
        var end = allcookies.indexOf(";",start);
        if(end==-1){
            end = allcookies.length;
        }
        value = allcookies.substring(start,end);
        console.log(value);
    }
    return value;
}

/*
By:FR
2015/11/16
作用：根据ID画canvas的折线图，label已固定好12等分
参数：canvasID，折线数据
返回值：无
*/
function drawCanvas(id,data){
    var ctx = $("#"+id).get(0).getContext("2d");
    var canvasWidth = $("#"+id).get(0).width;
    var canvasHeight = $("#"+id).get(0).height;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    var myNewChart = new Chart(ctx);
    var chartData = data;
    var labels = ["0","2","4","6","8","10","12","14","16","18","20","22"];
    var data = {
        labels : labels,
        datasets : [
            {
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                data : chartData
            }
        ]
    };
    myNewChart.Line(data);
}


/*
By:FR
2015/11/21
作用：根据ID画动态进度条
参数：canvasID，进度数据
返回值：无
*/
function drawProgessBar(id,data){
    var barTarget = $("#"+id);
    var start = 0;
    var improve = function(start,end){
        if(start!=end){
            start++;
            //回写信息
            barTarget.find("span").text(data+"month");
            //回写样式
            //barTarget.find("div").css({width:start+'%'});
            barTarget.find("div").css({width:data+'%'});
        }
    }
    //setInterval(improve(start,data),100);
    improve(start,data);
    //return improve();
}
