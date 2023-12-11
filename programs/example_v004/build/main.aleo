program example_v004.aleo;

struct SumOperation:
    a as u32;
    b as u32;

record SealOfComputation:
    owner as address.private;
    operation as SumOperation.private;
    c as u32.private;


mapping valid_seals:
	key as address.public;
	value as u32.public;

function add_numbers:
    input r0 as SumOperation.public;
    input r1 as u32.private;
    add r0.a r0.b into r2;
    assert.eq r1 r2;
    cast self.caller r0 r1 into r3 as SealOfComputation.record;
    output r3 as SealOfComputation.record;


function reveal_seal:
    input r0 as SealOfComputation.record;
    async reveal_seal self.caller into r1;
    output r1 as example_v004.aleo/reveal_seal.future;

finalize reveal_seal:
    input r0 as address.public;
    get.or_use valid_seals[r0] 0u32 into r1;
    add r1 1u32 into r2;
    set r2 into valid_seals[r0];
