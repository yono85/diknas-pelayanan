// VALIDATE FUNCTION
$.validator.addMethod("customemail", function(t, n)
{
        t=t.trim();
        var r= $(n).prop("required"),
        i=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(t);
        return r?""!==t&&i:""===t||i
}, "Sorry, I've enabled very strict email validation");

$.validator.addMethod("selectoptmin", function(value, element, arg)
{
    return arg !== value;
}, "Value must not equal arg.");

$.validator.addMethod("notnullhidden", function(value, element, arg)
{
    return arg !== value;

}, "Value must not equal arg xxx.");

var r = function(t)
{
    return t.trim()
}


