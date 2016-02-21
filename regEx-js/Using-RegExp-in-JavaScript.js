RegExp Constructor Got Cha
===========================

    Remember: both RegExp and String literal use backslash as
    escape token. So the follwing will be a compile time error.

    var stringLiteral = '\';
                          ^------ expecting a token after backslash

    This is b/c when the intepretor sees a backslash it expects
    a token to be follow immediately.

    The backslash and the token after backslash together as a unit
    is interperated to its value; therefore:

        var myRegExp = new RegExp('\w+');

    is same as:

        var myRegExp = new RegExp('w+');

    Eg:

        var myRegExp = new RegExp('\w+');
        var m = 'words words'.match(myRegExp);
        console.log(m) // ["w", index: 0, input: "words words"]

        var myRegExp = new RegExp('w+');
        var m = 'words words'.match(myRegExp);
        console.log(m) // ["w", index: 0, input: "words words"]

    To specified the regular expression "/\w+/", double backslash is
    required:

        var myRegExp = new RegExp('\\w+');
        var m = 'words words'.match(myRegExp);
        console.log(m) // ["words", index: 0, input: "words words"]


Quirk and irregulariry
======================

[1] Passing a nonglobal regular expression to the <String>.match() is actually
    the same as passing the string to the <RegExp>.exec(): the returned
    array has index and input properties

        console.log('about 24 characters long'.match(/^.*?([0-9][0-9])/));
        >> ["about 24", "24", index: 0, input: "about 24 characters long"]

        console.log(/^.*?([0-9][0-9])/.exec('about 24 characters long'));
        >> ["about 24", "24", index: 0, input: "about 24 characters long"]

    Compare the above to global regular expression:
        console.log('about 24 characters long'.match(/^.*?([0-9][0-9])/g));
        >> ["about 24"]

        console.log(/^.*?([0-9][0-9])/g.exec('about 24 characters long'));
        >> ["about 24", "24", index: 0, input: "about 24 characters long"]


 [2] <String>.search(<pattern>) does not support global searches, it
     ignores the g flag.

     To summarized:

         NOT support global searches:

             <String>.search(<pattern>)

         Support global searches:

             <String>.match(<pattern>)
             <String>.split(<pattern>, ... )
             <String>.replace(<pattern>, ... )


 [3] Normally method on string that receive regular expression in
     the argument will parse the string to type RegExp with the
     RegExp() constructor.  However, this is not the case with
     <String>.replace(<pattern , ...).  If <pattern> provided
     to replace() is of type string, replace() will search for that
     string literally.

     To summarize:

        Will NOT convert <patter> to RegExp:
            <String>.replace(<pattern>, ...)

        Will convert <pattern> to RegExp:
            <String>.search(<pattern>)
            <String>.match(<pattern>)
            <String>.split(<pattern>)



