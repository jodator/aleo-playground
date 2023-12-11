// A simple Aleo program
program example_v002.aleo {
    struct SumOperation {
        a: u32,
        b: u32,
    }

    transition add_numbers(private op: SumOperation) -> u32 {
        return op.a + op.b;
    }
}
