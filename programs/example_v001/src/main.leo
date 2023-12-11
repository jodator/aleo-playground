// A simple Aleo program
program example_v001.aleo {
    transition add_numbers(private a: u32, public b: u32) -> u32 {
        let c: u32 = a + b;
        return c;
    }
}
