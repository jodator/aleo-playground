program example_v006.aleo {
    transition add_u8(private a: u8, private b: u8) -> u8 {
        return a + b;
    }
    transition add_u8_wrapped(private a: u8, private b: u8) -> u8 {
        return a.add_wrapped(b);
    }

    transition add_field(private a: field, private b: field) -> field {
        return a + b;
    }

    transition sub_fields(private a: field, private b: field) -> field {
        return a - b;
    }

    transition invert_field(private a: field) -> field {
        return -a;
    }

    transition add_group(private a: group, private b: group) -> group {
        return a + b;
    }

    transition invert_group(private a: group) -> group {
        return -a;
    }

    transition sub_group(private a: group, private b: group) -> group {
        return a - b;
    }

    transition add_scalar(private a: scalar, private b: scalar) -> scalar {
        return a + b;
    }
}
