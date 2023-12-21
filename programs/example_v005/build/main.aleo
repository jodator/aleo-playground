program example_v005.aleo;



mapping val_bool:
	key as boolean.public;
	value as boolean.public;


mapping val_u8:
	key as boolean.public;
	value as u8.public;


mapping val_u32:
	key as boolean.public;
	value as u32.public;


mapping val_u64:
	key as boolean.public;
	value as u64.public;


mapping val_u128:
	key as boolean.public;
	value as u128.public;


mapping val_i8:
	key as boolean.public;
	value as i8.public;


mapping val_i32:
	key as boolean.public;
	value as i32.public;


mapping val_i64:
	key as boolean.public;
	value as i64.public;


mapping val_i128:
	key as boolean.public;
	value as i128.public;


mapping val_field:
	key as boolean.public;
	value as field.public;


mapping val_group:
	key as boolean.public;
	value as group.public;


mapping val_scalar:
	key as boolean.public;
	value as scalar.public;


mapping val_address:
	key as boolean.public;
	value as address.public;


mapping val_signature:
	key as boolean.public;
	value as signature.public;

function set_bool:
    input r0 as boolean.private;
    async set_bool r0 into r1;
    output r1 as example_v005.aleo/set_bool.future;

finalize set_bool:
    input r0 as boolean.public;
    set r0 into val_bool[true];


function set_u8:
    input r0 as u8.private;
    async set_u8 r0 into r1;
    output r1 as example_v005.aleo/set_u8.future;

finalize set_u8:
    input r0 as u8.public;
    set r0 into val_u8[true];


function set_u32:
    input r0 as u32.private;
    async set_u32 r0 into r1;
    output r1 as example_v005.aleo/set_u32.future;

finalize set_u32:
    input r0 as u32.public;
    set r0 into val_u32[true];


function set_u64:
    input r0 as u64.private;
    async set_u64 r0 into r1;
    output r1 as example_v005.aleo/set_u64.future;

finalize set_u64:
    input r0 as u64.public;
    set r0 into val_u64[true];


function set_u128:
    input r0 as u128.private;
    async set_u128 r0 into r1;
    output r1 as example_v005.aleo/set_u128.future;

finalize set_u128:
    input r0 as u128.public;
    set r0 into val_u128[true];


function set_i8:
    input r0 as i8.private;
    async set_i8 r0 into r1;
    output r1 as example_v005.aleo/set_i8.future;

finalize set_i8:
    input r0 as i8.public;
    set r0 into val_i8[true];


function set_i32:
    input r0 as i32.private;
    async set_i32 r0 into r1;
    output r1 as example_v005.aleo/set_i32.future;

finalize set_i32:
    input r0 as i32.public;
    set r0 into val_i32[true];


function set_i64:
    input r0 as i64.private;
    async set_i64 r0 into r1;
    output r1 as example_v005.aleo/set_i64.future;

finalize set_i64:
    input r0 as i64.public;
    set r0 into val_i64[true];


function set_i128:
    input r0 as i128.private;
    async set_i128 r0 into r1;
    output r1 as example_v005.aleo/set_i128.future;

finalize set_i128:
    input r0 as i128.public;
    set r0 into val_i128[true];


function set_field:
    input r0 as field.private;
    async set_field r0 into r1;
    output r1 as example_v005.aleo/set_field.future;

finalize set_field:
    input r0 as field.public;
    set r0 into val_field[true];


function set_group:
    input r0 as group.private;
    async set_group r0 into r1;
    output r1 as example_v005.aleo/set_group.future;

finalize set_group:
    input r0 as group.public;
    set r0 into val_group[true];


function set_scalar:
    input r0 as scalar.private;
    async set_scalar r0 into r1;
    output r1 as example_v005.aleo/set_scalar.future;

finalize set_scalar:
    input r0 as scalar.public;
    set r0 into val_scalar[true];


function set_address:
    input r0 as address.private;
    async set_address r0 into r1;
    output r1 as example_v005.aleo/set_address.future;

finalize set_address:
    input r0 as address.public;
    set r0 into val_address[true];


function set_signature:
    input r0 as signature.private;
    async set_signature r0 into r1;
    output r1 as example_v005.aleo/set_signature.future;

finalize set_signature:
    input r0 as signature.public;
    set r0 into val_signature[true];


function sub_fields:
    input r0 as field.private;
    input r1 as field.private;
    sub r0 r1 into r2;
    output r2 as field.private;


function invert_field:
    input r0 as field.private;
    neg r0 into r1;
    output r1 as field.private;


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


function add_group:
    input r0 as group.private;
    input r1 as group.private;
    add r0 r1 into r2;
    output r2 as group.private;


function invert_group:
    input r0 as group.private;
    neg r0 into r1;
    output r1 as group.private;


function add_scalar:
    input r0 as scalar.private;
    input r1 as scalar.private;
    add r0 r1 into r2;
    output r2 as scalar.private;
