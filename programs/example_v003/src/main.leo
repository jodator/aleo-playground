// A simple Aleo program
program example_v003.aleo {
    struct Sum {
        a: u32,
        b: u32,
    }

    record Result {
        operation: Sum,
        c: u32,
        owner: address,
    }

    transition add_numbers(public op: Sum, private c: u32) -> Result {
        let expected_sum: u32 = op.a + op.b;
        assert_eq(c, expected_sum);
        return Result {
            operation: op,
            c: c,
            owner: self.caller,
        };
    }
}
