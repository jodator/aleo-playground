program example_v002.aleo;

struct SumOperation:
    a as u32;
    b as u32;


function add_numbers:
    input r0 as SumOperation.private;
    add r0.a r0.b into r1;
    output r1 as u32.private;
