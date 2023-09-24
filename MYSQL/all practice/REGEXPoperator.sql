/*Regular expression we also called as REGEXP in shortform
sign       pattern          decresption
^          ^ra              Beginning of string
$          an$              End of string
[...]      [rms]            Ant charater list between the square barkets
^[...]     ^[rms]           Begin with any character listed between the square brakets
[a-z]      [a-h]e           Match with the range
p1|p2|p3   tom|dick|harry   march ant of the character
*/   
SELECT * FROM practice1.bus_root_pesenger WHERE NAME REGEXP"er|ae|pr";