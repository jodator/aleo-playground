program example_v003.aleo;

struct Sum:
    a as u32;
    b as u32;

record Result:
    owner as address.private;
    operation as Sum.private;
    c as u32.private;


function add_numbers:
    input r0 as Sum.public;
    input r1 as u32.private;
    add r0.a r0.b into r2;
    assert.eq r1 r2;
    cast self.caller r0 r1 into r3 as Result.record;
    output r3 as Result.record;
