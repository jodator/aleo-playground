program iou_token_v001.aleo;

record ticket:
    owner as address.private;
    issuer as address.private;
    amount as u32.private;


function create:
    input r0 as address.private;
    input r1 as u32.private;
    cast r0 self.caller r1 into r2 as ticket.record;
    output r2 as ticket.record;
