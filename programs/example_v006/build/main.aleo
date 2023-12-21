program example_v006.aleo;



function add_u8:
    input r0 as u8.private;
    input r1 as u8.private;
    add r0 r1 into r2;
    output r2 as u8.private;


function add_u8_wrapped:
    input r0 as u8.private;
    input r1 as u8.private;
    add.w r0 r1 into r2;
    output r2 as u8.private;


function add_field:
    input r0 as field.private;
    input r1 as field.private;
    add r0 r1 into r2;
    output r2 as field.private;


function sub_fields:
    input r0 as field.private;
    input r1 as field.private;
    sub r0 r1 into r2;
    output r2 as field.private;


function invert_field:
    input r0 as field.private;
    neg r0 into r1;
    output r1 as field.private;


function add_group:
    input r0 as group.private;
    input r1 as group.private;
    add r0 r1 into r2;
    output r2 as group.private;


function invert_group:
    input r0 as group.private;
    neg r0 into r1;
    output r1 as group.private;


function sub_group:
    input r0 as group.private;
    input r1 as group.private;
    sub r0 r1 into r2;
    output r2 as group.private;


function add_scalar:
    input r0 as scalar.private;
    input r1 as scalar.private;
    add r0 r1 into r2;
    output r2 as scalar.private;
