$(function() {
    $( ".hero" ).draggable();
    $( "#drop" ).droppable({
      drop: function( event, ui ) {
      	$(".hero").animate({
      	height:'toggle'
    	});
    	$("#drop").animate({
      	height:'toggle'

    	});
    	$(this).animate({
      	height:'100px',
      	width: '100px',
      	opacity:'0.5',
      	marginLeft: '-76%'
    	},"slow");
    	$("#hide").hide();
    	$('#hero_help_dialog').dialog({ show: {effect: 'fade', speed: 1000}

 			});
 		$('#hero_help_dialog').attr('title','Info').text('Wellcome').dialog( { buttons: { 'Ok': function() {
 			$(this).dialog('close');
 			
 		} } });
        $('#drop').css({"background-color":"#DAA520","border-color":"#DAA520"});
       

      }
    });

  });