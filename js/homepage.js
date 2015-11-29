/*添加电池 车架 BMS块响应绑定信息，这里没有错误提示，全部都会导入*/
var newrow="";
/*获得表一和表2的行，此处将需修改为获取json数据，添加至表格*/
function getNewRow1(){
    newrow="<tr>"+
        "<td><input type=\"text\" placeholder='电池ID' value='19位ID'></td>"+
        "<td><input type=\"text\" placeholder='BMS号' value='a7566445665'></td>"+
        "<td><input type=\"text\" placeholder='缺省项1' value='缺省信息1'></td>"+
        "<td><input type=\"text\" placeholder='缺省项2' value='缺省信息2'></td>"+
        "<td><button class=\"btn btn-danger btn-delete\" onclick=\"deleterow()\">删除</button></td>"+
        "</tr>";
}
function getNewRow2(){
    newrow="<tr>"+
        "<td><input type=\"text\" placeholder='BMS号' value='b7987564222'></td>"+
        "<td><input type=\"text\" placeholder='车架号' value='LDC99999998886666'></td>"+
        "<td><input type=\"text\" placeholder='车型' value='13'></td>"+
        "<td><input type=\"text\" placeholder='缺省项' value='缺省信息'></td>"+
        "<td><button class=\"btn btn-danger btn-delete\" onclick=\"deleterow()\">删除</button></td>"+
        "</tr>";
}
/*将新添加的行元素加至表格*/
function addInfoTable1() {
    getNewRow1();
    $('#form1BodyData').append(newrow);
    deleterow();
}
function addInfoTable2(){
    getNewRow2();
    $('#form2BodyData').append(newrow);
    deleterow();
}
/*删除删除按钮所在行*/
function deleterow(){
    $('.btn-delete').click(function () {
        $(this).parent().parent().remove();
        return false;
    })
}
/*提交电池和BMS绑定信息以及BMS和车架绑定信息表单*/
function submit1(){
    var form=$("#formForBat")[0];
    form.submit();
}
function submit2(){
    var form=$("#formForCar")[0];
    form.submit();
}
/*用作test，展现数据添加至表格之后的效果*/
$(document).ready(
    function(){
        for(var i=0;i<57;i++){
            addInfoTable1();
        }
        addInfoTable2();
        $('#batteryToBms').dataTable();
        $('#BmsToCar').dataTable();
    }
);


/* By:黄瑶
 * Date：2015.11.16
 * Function：从Excel表格读取按制定规则填写好的表格
 * 参数:excel表格存放路径，目前由默认路径替代*/