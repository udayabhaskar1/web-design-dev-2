//jQuery code for the website
$(document).ready(function() {
    //jQuery code for the Products Page
    $('#activator1').click(function(){
        $('.overlay').fadeIn(300,function(){
            $('#product1').animate({'top':'50px'},500);
        });
    });
	$('#activator2').click(function(){
        $('.overlay').fadeIn('fast',function(){
            $('#product2').animate({'top':'50px'},500);
        });
    });
	$('#activator3').click(function(){
        $('.overlay').fadeIn(300,function(){
            $('#product3').animate({'top':'50px'},500);
        });
    });
	$('#activator4').click(function(){
        $('.overlay').fadeIn(300,function(){
            $('#product4').animate({'top':'50px'},500);
        });
    });
	$('#activator5').click(function(){
        $('.overlay').fadeIn(300,function(){
            $('#product5').animate({'top':'50px'},500);
        });
    });
	$('#activator6').click(function(){
        $('.overlay').fadeIn(300,function(){
            $('#product6').animate({'top':'50px'},500);
        });
    });
	$('#activator7').click(function(){
        $('.overlay').fadeIn(300,function(){
            $('#product7').animate({'top':'50px'},500);
        });
    });
	$('#activator8').click(function(){
        $('.overlay').fadeIn(300,function(){
            $('#product8').animate({'top':'50px'},500);
        });
    });
	$('#activator9').click(function(){
        $('.overlay').fadeIn(300,function(){
            $('#product9').animate({'top':'50px'},500);
        });
    });
    $('#close1').click(function(){
        $('#product1').animate({'top':'-1000px'},300,function(){
            $('.overlay').fadeOut(200);
        });
    });
	$('#close2').click(function(){
        $('#product2').animate({'top':'-1000px'},300,function(){
            $('.overlay').fadeOut(200);
        });
    });
	$('#close3').click(function(){
        $('#product3').animate({'top':'-1000px'},300,function(){
            $('.overlay').fadeOut(200);
        });
    });
	$('#close4').click(function(){
        $('#product4').animate({'top':'-1000px'},300,function(){
            $('.overlay').fadeOut(200);
        });
    });
	$('#close5').click(function(){
        $('#product5').animate({'top':'-1000px'},300,function(){
            $('.overlay').fadeOut(200);
        });
    });
	$('#close6').click(function(){
        $('#product6').animate({'top':'-1000px'},300,function(){
            $('.overlay').fadeOut(200);
        });
    });
	$('#close7').click(function(){
        $('#product7').animate({'top':'-1000px'},300,function(){
            $('.overlay').fadeOut(200);
        });
    });
	$('#close8').click(function(){
        $('#product8').animate({'top':'-1000px'},300,function(){
            $('.overlay').fadeOut(200);
        });
    });
	$('#close9').click(function(){
        $('#product9').animate({'top':'-1000px'},300,function(){
            $('.overlay').fadeOut(200);
        });
    });
    //jQuery code for the Order Form
    $("select[name='numberp1']").change(function(){
        var $d = $("select[name='numberp1']");
            var n = parseFloat($d.val());
            var r = (19.99*n).toFixed(2);
            $("#resultp1").val('$'+r);
    });
    $("select[name='numberp2']").change(function(){
        var $d = $("select[name='numberp2']");
        var n = parseFloat($d.val());
        var r = (19.99*n).toFixed(2);
        $("#resultp2").val('$'+r);
    });
    $("select[name='numberp3']").change(function(){
        var $d = $("select[name='numberp3']");
        var n = parseFloat($d.val());
        var r = (24.99*n).toFixed(2);
        $("#resultp3").val('$'+r);
    });
    $("select[name='numberb1']").change(function(){
        var $d = $("select[name='numberb1']");
        var n = parseFloat($d.val());
        var r = (19.99*n).toFixed(2);
        $("#resultb1").val('$'+r);
    });
    $("select[name='numberb2']").change(function(){
        var $d = $("select[name='numberb2']");
        var n = parseFloat($d.val());
        var r = (14.99*n).toFixed(2);
        $("#resultb2").val('$'+r);
    });
    $("select[name='numberb3']").change(function(){
        var $d = $("select[name='numberb3']");
        var n = parseFloat($d.val());
        var r = (19.99*n).toFixed(2);
        $("#resultb3").val('$'+r);
    });
    $("select[name='numberc1']").change(function(){
        var $d = $("select[name='numberc1']");
        var n = parseFloat($d.val());
        var r = (19.99*n).toFixed(2);
        $("#resultc1").val('$'+r);
    });
    $("select[name='numberc2']").change(function(){
        var $d = $("select[name='numberc2']");
        var n = parseFloat($d.val());
        var r = (19.99*n).toFixed(2);
        $("#resultc2").val('$'+r);
    });
    $("select[name='numberc3']").change(function(){
        var $d = $("select[name='numberc3']");
        var n = parseFloat($d.val());
        var r = (19.99*n).toFixed(2);
        $("#resultc3").val('$'+r);
    });
    //Each time the product quantity changes, the total is recalculated
    var total=0;
    $('select').change(function () {
        total = 0;
        $('input.result').each(function () {
            var amountInfo = parseFloat($(this).val().replace('$',''));
            amountInfo = (amountInfo) ? amountInfo : 0; //Checking if number is otherwise set to 0
            total += amountInfo;
        });
        $('input[name="totalPrice"]').val('$'+total.toFixed(2));
    });
    //jQuery code for SlidesJS responsive slide show on home page
    $(function() {
        $('#slides').slidesjs({
            width: 1024,
            height: 768,
            play: {
                active: true,
                auto: true,
                interval: 3500,
                swap: true,
                restartDelay: 2000
            }
        });
    });
    //jQuery code for SlidesJS responsive slide show on cafe page
    $(function() {
        $('#slidesCafe').slidesjs({
            width: 1200,
            height: 750,
            play: {
                active: true,
                auto: true,
                interval: 3500,
                swap: true,
                restartDelay: 2000
            }
        });
    });
    //jQuery code for Search Engine functionality
        var cx = '018311955383715191124:9mwvt3kwoe4';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
});
//jQuery code for Accordion functionality
$( function() {
    $( "#accordion1" ).accordion({collapsible: true, active: false, heightStyle: "content"});
} )

$( function() {
    $( "#accordion2" ).accordion({collapsible: true, active: false, heightStyle: "content"});} )

$( function() {
    $( "#accordion3" ).accordion({collapsible: true, active: false, heightStyle: "content"});} )
