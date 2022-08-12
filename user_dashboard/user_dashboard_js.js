var dropdowns = document.querySelectorAll('.dropdown-trigger')
for (var i = 0; i < dropdowns.length; i++){
   var instance = M.Dropdown.init(dropdowns[i], {coverTrigger:false});
}
var instance = M.Dropdown.getInstance(elem);
instance.open()
