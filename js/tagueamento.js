// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

var menu_contato = document.getElementById('entre_em_contato');

menu_contato.addEventListener('click', function (event) {
    // ga('send', {
    //     hitType: 'event',
    //     eventCategory: 'menu',
    //     eventAction: 'entre_em_contato',
    //     eventLabel: 'link_externo'
    // });
    alert('clicou: entre_em_contato ')
});

function downloadPdf() {
    // ga('send', {
    //     hitType: 'event',
    //     eventCategory: 'menu',
    //     eventAction: 'download_pdf',
    //     eventLabel: 'download_pdf'
    // });
    alert('clicou: download_pdf')
}

$(".card-montadoras").click(function () {
    var data = $(this).data()
    // ga('send', {
    //     hitType: 'event',
    //     eventCategory: 'analise',
    //     eventAction: 'ver_mais',
    //     eventLabel: data.name
    // });
    alert("Handler for .click() called.: " + data.id + ' - ' + data.name);
});

function getValueInput(input) {
    // ga('send', {
    //     hitType: 'event',
    //     eventCategory: 'contato',
    //     eventAction: input.id,
    //     eventLabel: 'preencheu'
    // });
    console.log(input.id)
}


var form = document.getElementById('signup-form');

// Adds a listener for the "submit" event.
form.addEventListener('submit', function (event) {

    event.preventDefault();

    // ga('send', {
    //     hitType: 'event',
    //     eventCategory: 'contato',
    //     eventAction: 'enviado',
    //     eventLabel: 'enviado'
    // });
});