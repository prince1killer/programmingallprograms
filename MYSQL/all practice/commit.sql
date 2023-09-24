/*
	here commit is use for recap or move one step back of last run code 
    there are two command 1.commit and rollback
    both of this you can understand as loop and hence in between all the commend will move back
    note 
    this rollback and commit will work for on insert , update, and delete;
like:-
*/
select * from employee
commit;
delete from employee
where id=1;
rollback;