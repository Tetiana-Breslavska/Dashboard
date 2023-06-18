'use strict';


// filter
let filter = function (){
  let input = document.getElementById('filter-input');
  input.addEventListener('keyup',function (){
    let filter = input.value.toLowerCase(),filterElements = document.querySelectorAll('#filter-list .name');
    filterElements.forEach(item => {
      if(item.innerHTML.toLowerCase().indexOf(filter) > -1){
        item.style.display = '';
      }
      else{
        item.parentNode.style.display = 'none';
      }
      if(input.value == '') {
        item.parentNode.style.display = '';
      }
    });
  });
};

filter();



///tabs

$(document).ready(function(){
  $('.tab-content').hide();
  $('.tab-content:nth-child(3)').show();
  $('#tabs-nav li a').click(function (){
    $('#tabs-nav li a').removeClass('active-btn');
    $(this).addClass('active-btn');
    $('.tab-content').hide();
    let activeTab = $(this).attr('href');
    $(activeTab).fadeIn();
  })
});

