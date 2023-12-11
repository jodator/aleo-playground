// A simple Aleo program
program example_v004.aleo {
    struct SumOperation {
        a: u32,
        b: u32,
    }

    record SealOfComputation {
        operation: SumOperation,
        c: u32,
        owner: address,
    }

    mapping valid_seals: address => u32;

    transition add_numbers(public op: SumOperation, private c: u32) -> SealOfComputation {
        let expected_sum: u32 = op.a + op.b;
        assert_eq(c, expected_sum);
        return SealOfComputation {
            operation: op,
            c: c,
            owner: self.caller,
        };
    }

    transition reveal_seal(private seal: SealOfComputation) {
        return then finalize(self.caller);
    }

    finalize reveal_seal(who: address) {
        let revealed: u32 = Mapping::get_or_use(valid_seals, who, 0u32);
        Mapping::set(valid_seals, who, revealed + 1u32);
    }
}
