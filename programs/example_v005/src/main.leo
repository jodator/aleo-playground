program example_v005.aleo {
    mapping val_bool: bool => bool;
    mapping val_u8: bool => u8;
    mapping val_u32: bool => u32;
    mapping val_u64: bool => u64;
    mapping val_u128: bool => u128;
    mapping val_i8: bool => i8;
    mapping val_i32: bool => i32;
    mapping val_i64: bool => i64;
    mapping val_i128: bool => i128;
    mapping val_field: bool => field;
    mapping val_group: bool => group;
    mapping val_scalar: bool => scalar;
    mapping val_address: bool => address;
    mapping val_signature: bool => signature;

    transition set_bool(private value: bool) -> bool {
        return then finalize(value);
    }

    finalize set_bool(value: bool) {
        Mapping::set(val_bool, true, value);
    }

    transition set_u8(private value: u8) -> u8 {
        return then finalize(value);
    }

    finalize set_u8(value: u8) {
        Mapping::set(val_u8, true, value);
    }

    transition set_u32(private value: u32) -> u32 {
        return then finalize(value);
    }

    finalize set_u32(value: u32) {
        Mapping::set(val_u32, true, value);
    }

    transition set_u64(private value: u64) -> u64 {
        return then finalize(value);
    }

    finalize set_u64(value: u64) {
        Mapping::set(val_u64, true, value);
    }

    transition set_u128(private value: u128) -> u128 {
        return then finalize(value);
    }

    finalize set_u128(value: u128) {
        Mapping::set(val_u128, true, value);
    }

    transition set_i8(private value: i8) -> i8 {
        return then finalize(value);
    }

    finalize set_i8(value: i8) {
        Mapping::set(val_i8, true, value);
    }

    transition set_i32(private value: i32) -> i32 {
        return then finalize(value);
    }

    finalize set_i32(value: i32) {
        Mapping::set(val_i32, true, value);
    }

    transition set_i64(private value: i64) -> i64 {
        return then finalize(value);
    }

    finalize set_i64(value: i64) {
        Mapping::set(val_i64, true, value);
    }

    transition set_i128(private value: i128) -> i128 {
        return then finalize(value);
    }

    finalize set_i128(value: i128) {
        Mapping::set(val_i128, true, value);
    }

    transition set_field(private value: field) -> field {
        return then finalize(value);
    }

    finalize set_field(value: field) {
        Mapping::set(val_field, true, value);
    }

    transition set_group(private value: group) -> group {
        return then finalize(value);
    }

    finalize set_group(value: group) {
        Mapping::set(val_group, true, value);
    }

    transition set_scalar(private value: scalar) -> scalar {
        return then finalize(value);
    }

    finalize set_scalar(value: scalar) {
        Mapping::set(val_scalar, true, value);
    }

    transition set_address(private value: address) -> address {
        return then finalize(value);
    }

    finalize set_address(value: address) {
        Mapping::set(val_address, true, value);
    }

    transition set_signature(private value: signature) -> signature {
        return then finalize(value);
    }

    finalize set_signature(value: signature) {
        Mapping::set(val_signature, true, value);
    }
}
