// A simple Aleo program
program example_v003.aleo {
    struct SumOperation {
        a: u32,
        b: u32,
    }

    record SealOfComputation {
        operation: SumOperation,
        c: u32,
        owner: address,
    }

    transition add_numbers(public op: SumOperation, private c: u32) -> SealOfComputation {
        let expected_sum: u32 = op.a + op.b;
        assert_eq(c, expected_sum);
        return SealOfComputation {
            operation: op,
            c: c,
            owner: self.caller,
        };
    }
}
