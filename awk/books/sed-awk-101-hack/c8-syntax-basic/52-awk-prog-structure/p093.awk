BEGIN {
    FS=":"
    print "- - - Header - - -"
}
/mail/ {
    print $1
}
END {
    print "- - - Footer - - -"
}
