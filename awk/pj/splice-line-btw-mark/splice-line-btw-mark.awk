BEGIN {
    print "- - - begin - - -"
}
/^\/\* module / {
    if ( $3 == "start")  output="true"
    if ( $3 == "end")  output="false"
}
{
    if ( $0 !~ "/* module" && output == "true" ) print $0
}
END {
    print "- - - end - - -"
}
