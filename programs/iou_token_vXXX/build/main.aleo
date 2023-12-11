program iou_token_v002.aleo;

record Ticket:
    owner as address.private;
    issuer as address.private;
    amount as u32.private;
    revealed as boolean.private;


mapping public_debt:
	key as address.public;
	value as u32.public;

function create:
    input r0 as address.private;
    input r1 as u32.private;
    cast r0 self.caller r1 false into r2 as Ticket.record;
    output r2 as Ticket.record;


function reveal:
    input r0 as Ticket.record;
    not r0.revealed into r1;
    assert.eq r1 true;
    cast r0.owner r0.issuer r0.amount true into r2 as Ticket.record;
    async reveal r0.amount r0.issuer into r3;
    output r2 as Ticket.record;
    output r3 as iou_token_v002.aleo/reveal.future;

finalize reveal:
    input r0 as u32.public;
    input r1 as address.public;
    get.or_use public_debt[r1] 0u32 into r2;
    add r2 r0 into r3;
    set r3 into public_debt[r1];
