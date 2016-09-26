function OnChange(dropdown)
{
    var myindex  = dropdown.selectedIndex
    var SelValue = dropdown.options[myindex].value
    
    top.location.href = baseURL;
    
    return true;
}