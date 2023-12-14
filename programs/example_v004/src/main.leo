// A simple Aleo program
program example_v004.aleo {
    struct Sum {
        a: u32,
        b: u32,
    }

    record Result {
        operation: Sum,
        c: u32,
        owner: address,
    }

    mapping valid_results: address => u32;

    transition add_numbers(public op: Sum, private c: u32) -> Result {
        let expected_sum: u32 = op.a + op.b;
        assert_eq(c, expected_sum);
        return Result {
            operation: op,
            c: c,
            owner: self.caller,
        };
    }

    transition validate_result(private result: Result) {
        return then finalize(self.caller);
    }

    finalize validate_result(who: address) {
        let revealed: u32 = Mapping::get_or_use(valid_results, who, 0u32);
        Mapping::set(valid_results, who, revealed + 1u32);
    }
}
