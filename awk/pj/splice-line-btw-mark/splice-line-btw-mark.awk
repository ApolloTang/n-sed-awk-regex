BEGIN {
    print "- - - begin - - -"
}
/^\/\* module / {
    if ( $3 == "start")  output="true"
    if ( $3 == "end")  output="false"
}
{
    # /^[^\/\* module ]/ { if ( output=="true") print $0 }
    # the above misses line start with space, need more robust regEx; below is a non regEx fix
    if ( $0 !~ "/* module" && output == "true" ) print $0
}
END {
    print "- - - end - - -"
}
