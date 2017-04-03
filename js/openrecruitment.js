// JavaScript Document

$(function(){
  var division = [
    'Relasi Tahap Persiapan Bersama',
    'Relasi S1 ITB Ganesha',
    'Relasi ITB Jatinangor',
    'Relasi ITB Cirebon',
    'Relasi Pascasarjana dan Hubungan Masyarakat',
    'Publikasi Dalam Jaringan',
    'Publikasi Luar Jaringan',
    'Kreasi Visual',
    'Kajian Strategis',
    'Analisis Data dan Aspirasi',
	'Manajemen Sumber Daya Anggota'
  ];
	
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
  });

  var divisionItemTemplate=
    '<div class="col s12 division-item">'
    + '<div class="panel panel-default">'
    + '<div class="panel-heading"><span></span></div></div></div>';

  var divisionItemPlaceholder=
    '<div class="col s12 division-item division-item-placeholder">'
    + '<div class="panel panel-default">'
    + '<div class="panel-heading"><span></span></div></div></div>';

  $('.datepicker').pickadate({
  	format:'dd/mm/yyyy',
	  today: '',
	  close: 'Set',
	  selectYears:60,
	  selectMonths:true
  });

  var isShuffled=false;

  function initializePool() {
        var pool = $('.division-pool');
        pool.html('');
        for (i = 0; i < division.length; ++i) {
            var newDivisionItem = $($.parseHTML(divisionItemTemplate));
            newDivisionItem.data('division', division[i]);
            pool.append(newDivisionItem);
        }
        // append clear to make the well works
        pool.append('<div class="clear"></div>');
    }
	
  $('.modal').modal({
	  dismissible:false,
	  
  });

  initializePool();

   function shuffle(){
        for(i = 1;i <= 100; ++i){
            var x = Math.floor(Math.random() * i) % division.length;
            var y = Math.floor(Math.random() * (i + 1)) % division.length;
            var temp = division[x];
            division[x] = division[y];
            division[y] = temp;
        }
        initializePool();
        reorderDivisionItem();
        isShuffled = true;
    }

    // initially, shuffle the options
    shuffle();

 function reorderDivisionItem(ui) {
        // reorder the numbering
        $('.division-item:not(.ui-sortable-helper)').each(function(i, e) {
            // convert into jQuery object
            e = $(e);
            if (e.hasClass('division-item-placeholder')) {
                e = ui.helper;
            }
            var name = e.data('division');
            e.find('span').html('' + (i + 1) + '. ' + name);

            // bold the top three, replace them in text
            e.removeClass('division-item-top');
            if (i < 3) {
                e.addClass('division-item-top');
                $('.division-' + (i + 1)).html(name);
            }
        });
    }
    reorderDivisionItem();

    $('.division-pool').sortable({
        cursor: 'move',
        items: '.division-item',
        opacity: 0.8,
        update: function (event, ui) {
            reorderDivisionItem();
            isShuffled = false;
        },
        sort: function (event, ui) {
            reorderDivisionItem(ui);
        },
        placeholder: {
            element: function(clone, ui) {
                return $(divisionItemPlaceholder);
            },
            update: function() {}
        },
        revert: 300
    });
	
  $('.submit-button').click(function(){
	  fillModal();
	  $('#review-modal').modal('open');
  });
	
  $('#reset-button').click(function(){
	  $('#review-modal').modal('close');
  });
	
  function fillModal(){
	  $('#nama-review').html($('#name').val());
	  $('#nim-review').html($('#nim').val());
	  $('#ttl-review').html($('#tempatLahir').val()+", "+$('#tanggalLahir').val());
	  $('#telp-review').html($('#nomorTelepon').val());
	  $('#email-review').html($("#email").val());
	  $('#line-review').html($('#idLine').val());
	  $('#emergency-review').html($('#noDarurat').val()+" ("+$('#pihakDarurat').val()+")");
	  $('#alamat-review').html($("#alamat").val());
	  $('#kendaraan-review').html($("#kendaraan").val());
	  $('#keahlian-review').html($("#keahlian").val());
	  $('#organisasi-review').html($("#organisasi").val());
	  $('#kepanitiaan-review').html($("#kepanitiaan").val());
	  $('#kesibukan-review').html($("#kesibukan").val());
	  
	  //MBTI
	  $('#mbti-review').html($('#mbti').val());
	  
	  //division
	  var order = $('#division-review');
        order.html('<ol></ol>');
        $('.division-item').each(function(i, e) {
            order.find('ol').append('<li>' + $(e).data('division') + '</li>');
        });
	  
	  //reasons
	  for (var i = 1; i <= 3; ++i) {
            $('#reason' + i + '-review').html($('#reason' + i).val());
        }
  }

  var formKey = "e/1FAIpQLSeqprEkjYE1oS5Wpi_sNvtZOD_tc1J-yPEZRjp3w411le5r2Q";
	
  var formEntries = {
	  nama: "entry.1839260254",
	  nim: "entry.1654309158",
	  tempatlahir: "entry.885649470",
	  tanggallahir: "entry.523073533",
	  notelp: "entry.1402243068",
	  notelpdarurat: "entry.1855563413",
	  pemilikdarurat: "entry.1429309956",
	  email: "entry.1156103119",
	  alamat: "entry.1736388662",
	  idline: "entry.1203344181",
	  penyakit: "entry.1325252122",
	  kendaraan: "entry.758369097",
	  keahlian: "entry.1916409383",
	  organisasi: "entry.1789619131",
	  kepanitiaan: "entry.1183517718",
	  kesibukan: "entry.1333077773",
	  
	  divisi:[
		"entry.2100413130",
		"entry.772961315",
		"entry.907878507",
		"entry.141231101",//4
		"entry.1918773200",
		"entry.1139148372",
		"entry.1422858740",
		"entry.412468260",//8
		"entry.1041488826",
		"entry.101889886",
		"entry.1776833333"
	  ],
	  
	  alasan:[
		"entry.264803696",
		"entry.93929055",
		"entry.768048502"
	  ],
	  
	  MBTI: "entry.1086493230",
	  
	  communication:[
		"entry.1814451636",
		"entry.252883980",
		"entry.2117960294",
		"entry.44541694"
	  ],
	  
	  manage:[
		"entry.1624341122",
		"entry.511211685",
		"entry.1835363456",
		"entry.1723298695"
	  ],
	  
	  dare:[
		"entry.1112402529",
		"entry.314846700",
		"entry.1505820067",
		"entry.436614859"
	  ],
	  
	  adapt:[
		"entry.773360498",
		"entry.63710511",
		"entry.1270815412",
		"entry.2063094220"
	  ],
	  
	  excel:[
		"entry.2109638102",
		"entry.1790191347",
		"entry.1253226378",
		"entry.1248878201"
	  ]
  };
  
  $('#real-submit-button').click(function(){
	  var url = "//docs.google.com/d/"+formKey+"/formResponse";
	  
  });
  
  particlesJS("particles-js",{
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#1e00ff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 125,
        "color": "#004dbb",
        "opacity": 0.2,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "top-right",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 180,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
});