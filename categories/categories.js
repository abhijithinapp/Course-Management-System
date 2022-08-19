/*sidenav eventlistener*/
document.addEventListener('DOMContentLoaded',function(){
    var side = document.querySelector('.sidenav');
    instance = M.Sidenav.init(side)
 })

 /*dropdown eventlistener*/
 document.addEventListener('DOMContentLoaded', function() {
    var drop = document.querySelectorAll('.dropdown-trigger');
    instance = M.Dropdown.init(drop);
  });

  /*collapsible eventlistener*/
  document.addEventListener('DOMContentLoaded', function() {
    var collapse = document.querySelectorAll('.collapsible');
    instance = M.Collapsible.init(collapse);
  });