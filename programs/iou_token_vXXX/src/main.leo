// The 'iou_token_vXXX' program.
program iou_token_v001.aleo {
    transition main(public a: u32, b: u32) -> u32 {
        let c: u32 = a + b;
        return c;
    }
}
