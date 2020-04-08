/***
 *  Hamburger menu: mostrare / nascondere il menu principale (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
*/

var hamburgerMenu = $('.hamburger-menu'); // contenuto del menu

var hamburgerMenu_ClickOpen = $('.header-right > a'); //link all'icona hamburger per aprire il menu

var hamburgerMenu_ClickClose = $('.hamburger-menu > a'); //link all'icona close per chiudere


// con il metodo hide and show 

// hamburgerMenu_ClickOpen.click( function(){
//     hamburgerMenu.show();
//     console.log('Click Open');
// });

// hamburgerMenu_ClickClose.click( function(){
//     hamburgerMenu.hide();
//     console.log('Click Close');
// });


// // con il metodo fade-in/fade-out ho lasciato con tempo di default

hamburgerMenu_ClickOpen.click( function(){
    hamburgerMenu.fadeIn();
    console.log('Click Open');
    
});

hamburgerMenu_ClickClose.click( function(){
    hamburgerMenu.fadeOut();
    console.log('Click Close');
    
});


// con la classe css hamburger-menu.active

// hamburgerMenu_ClickOpen.click( function(){
//     hamburgerMenu.addClass('active');
//     console.log('Click Open');
// });

// hamburgerMenu_ClickClose.click( function(){
//     hamburgerMenu.removeClass('active');
//     console.log('Click Close');
// });