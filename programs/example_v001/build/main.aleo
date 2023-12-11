program example_v001.aleo;



function add_numbers:
    input r0 as u32.private;
    input r1 as u32.public;
    add r0 r1 into r2;
    output r2 as u32.private;
