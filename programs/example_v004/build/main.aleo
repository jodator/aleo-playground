program example_v004.aleo;

struct Sum:
    a as u32;
    b as u32;

record Result:
    owner as address.private;
    operation as Sum.private;
    c as u32.private;


mapping valid_results:
	key as address.public;
	value as u32.public;

function add_numbers:
    input r0 as Sum.public;
    input r1 as u32.private;
    add r0.a r0.b into r2;
    assert.eq r1 r2;
    cast self.caller r0 r1 into r3 as Result.record;
    output r3 as Result.record;


function validate_result:
    input r0 as Result.record;
    async validate_result self.caller into r1;
    output r1 as example_v004.aleo/validate_result.future;

finalize validate_result:
    input r0 as address.public;
    get.or_use valid_results[r0] 0u32 into r1;
    add r1 1u32 into r2;
    set r2 into valid_results[r0];
